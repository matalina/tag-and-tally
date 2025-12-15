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
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  // Verify signature
  const signature = event.headers['x-signature-ed25519']
  const timestamp = event.headers['x-signature-timestamp']

  if (!signature || !timestamp || !event.body) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    }
  }

  // Verify the request is from Discord
  const isValidRequest = verifyKey(event.body, signature, timestamp, PUBLIC_KEY)

  if (!isValidRequest) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Invalid signature' }),
    }
  }

  // Parse the interaction
  const interaction = JSON.parse(event.body) as APIApplicationCommandInteraction | { type: number }

  // Handle PING (Discord sends this to verify your endpoint)
  if (interaction.type === InteractionType.PING) {
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
  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
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
}
