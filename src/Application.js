const Configuration = require('./Configuration')
const DiscordManager = require('./discord/DiscordManager')
const Logger = require('./Logger')

class Application {
  async register() {
    this.config = new Configuration()
    this.log = new Logger()

    this.discord = new DiscordManager(this)
  }

  async connect() {
    this.discord.connect()
  }
}

module.exports = new Application()
