import type { Handler } from '@netlify/functions'
import { InteractionType, InteractionResponseType, verifyKey } from 'discord-interactions'
import type {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
} from 'discord-api-types/v10'

const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY!

// Handle slash command interactions
async function handleCommand(interaction: APIApplicationCommandInteraction) {
  // Only chat input commands have options
  if (interaction.data.type !== 1) {
    return {
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: '❌ This command type is not supported',
      },
    }
  }

  const chatInputInteraction = interaction as APIChatInputApplicationCommandInteraction
  const { name, options } = chatInputInteraction.data
  switch (name) {
    case 'ping':
      return {
        type: InteractionResponseType.PONG,
      }

    case 'roll': {
      const diceOption = options?.find((opt) => opt.name === 'dice')
      const diceNotation =
        diceOption && 'value' in diceOption ? (diceOption.value as string) : undefined

      if (!diceNotation) {
        return {
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: '❌ Please provide dice notation (e.g., 1d20, 2d6+3)',
          },
        }
      }

      // TODO: Implement dice rolling logic
      // For now, return a placeholder response
      return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `🎲 Rolling ${diceNotation}... (dice rolling not yet implemented)`,
        },
      }
    }

    case 'help': {
      const commandOption = options?.find((opt) => opt.name === 'command')
      const commandName =
        commandOption && 'value' in commandOption ? (commandOption.value as string) : undefined

      if (commandName) {
        // Return help for specific command
        return {
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `Help for /${commandName}: (help text not yet implemented)`,
          },
        }
      }

      // Return general help
      return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `**Available Commands:**
/ping - Replies with Pong!
/roll <dice> - Roll dice using dice notation (e.g., 1d20, 2d6+3)
/help [command] - Get help about available commands`,
        },
      }
    }

    default:
      return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: '❌ Unknown command',
        },
      }
  }
}

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Lexi for Tag and Tally is up and running.' }),
      }
    }
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      }
    }

    // Check if PUBLIC_KEY is set
    if (!PUBLIC_KEY) {
      console.error('DISCORD_PUBLIC_KEY is not set')
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      }
    }

    // Log all headers for debugging (remove in production)
    console.log('Request headers:', JSON.stringify(event.headers, null, 2))
    console.log('Body type:', typeof event.body, 'Body length:', event.body?.length)

    // Verify signature - check all possible header case variations
    // Netlify may normalize headers, so check multiple variations
    const signature =
      event.headers['x-signature-ed25519'] ||
      event.headers['X-Signature-Ed25519'] ||
      event.headers['x-signature-ed25519'.toLowerCase()] ||
      event.headers['x-signature-ed25519'.toUpperCase()]

    const timestamp =
      event.headers['x-signature-timestamp'] ||
      event.headers['X-Signature-Timestamp'] ||
      event.headers['x-signature-timestamp'.toLowerCase()] ||
      event.headers['x-signature-timestamp'.toUpperCase()]

    if (!signature || !timestamp || !event.body) {
      console.error('Missing signature, timestamp, or body', {
        hasSignature: !!signature,
        hasTimestamp: !!timestamp,
        hasBody: !!event.body,
        headers: Object.keys(event.headers),
        bodyLength: event.body?.length,
      })
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Unauthorized' }),
      }
    }

    // Get raw body string for signature verification
    // Netlify Functions v2 might have body as string or object
    const rawBody = typeof event.body === 'string' ? event.body : JSON.stringify(event.body)

    // Verify the request is from Discord
    const isValidRequest = verifyKey(rawBody, signature, timestamp, PUBLIC_KEY)

    if (!isValidRequest) {
      console.error('Invalid signature verification', {
        signatureLength: signature?.length,
        timestampLength: timestamp?.length,
        bodyLength: rawBody?.length,
        publicKeyLength: PUBLIC_KEY?.length,
      })
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Invalid signature' }),
      }
    }

    // Parse the interaction
    const bodyData = typeof event.body === 'string' ? event.body : JSON.stringify(event.body)
    const interaction = JSON.parse(bodyData) as APIApplicationCommandInteraction | { type: number }

    // Handle PING (Discord sends this to verify your endpoint)
    // PING type is 1
    if (interaction.type === InteractionType.PING || interaction.type === 1) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: InteractionResponseType.PONG,
        }),
      }
    }

    // Handle APPLICATION_COMMAND (slash commands)
    // APPLICATION_COMMAND type is 2
    if (interaction.type === InteractionType.APPLICATION_COMMAND || interaction.type === 2) {
      const response = await handleCommand(interaction as APIApplicationCommandInteraction)

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
      }
    }

    // Unknown interaction type
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Unknown interaction type' }),
    }
  } catch (error) {
    console.error('Error in discord-bot handler:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}
