import 'dotenv/config'
import { REST, Routes, type RESTPostAPIApplicationCommandsJSONBody } from 'discord.js'

// Load environment variables
const token = process.env.DISCORD_BOT_TOKEN
const clientId = process.env.DISCORD_APPLICATION_ID

// Validate environment variables
if (!token) {
  console.error('❌ Error: DISCORD_BOT_TOKEN environment variable is not set')
  process.exit(1)
}

if (!clientId) {
  console.error('❌ Error: DISCORD_APPLICATION_ID environment variable is not set')
  process.exit(1)
}

// Define your commands here
// Each command should follow the Discord API slash command structure
const commands: RESTPostAPIApplicationCommandsJSONBody[] = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'roll',
    description: 'Roll dice using dice notation',
    options: [
      {
        name: 'dice',
        description: 'Dice notation (e.g., 1d20, 2d6+3)',
        type: 3, // STRING type
        required: true,
      },
    ],
  },
  {
    name: 'help',
    description: 'Get help about available commands',
    options: [
      {
        name: 'command',
        description: 'The command to get help for',
        type: 3, // STRING type
        required: false,
      },
    ],
  },
]

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token)

// Register commands globally
async function registerCommands() {
  try {
    console.log(`🔄 Started refreshing ${commands.length} application (/) command(s).`)

    // Register commands globally
    const data = (await rest.put(Routes.applicationCommands(clientId || ''), {
      body: commands,
    })) as unknown[]

    console.log(`✅ Successfully registered ${data.length} application (/) command(s).`)
    console.log('📝 Registered commands:')
    commands.forEach((cmd) => {
      console.log(`   - /${cmd.name}`)
    })
    console.log('\n⏰ Note: Global commands may take up to 1 hour to propagate to all servers.')
  } catch (error) {
    console.error('❌ Error registering commands:')
    if (error instanceof Error) {
      console.error(error.message)
      if (error.stack) {
        console.error(error.stack)
      }
    } else {
      console.error(error)
    }
    process.exit(1)
  }
}

// Run the registration
registerCommands()
  .then(() => {
    console.log('✨ Command registration completed successfully!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Fatal error during command registration:')
    console.error(error)
    process.exit(1)
  })
