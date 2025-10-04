const fs = require('fs')
class Configuration {
  properties = {
    discord: {
      token: null,
      channel: null,
      commandRole: '',
      userRole: '',
      ownerId: '',
      prefix: '!',
      messageMode: 'webhook'
    }
  }

  environmentOverrides = {
    DISCORD_TOKEN: val => (this.properties.discord.token = val),
    DISCORD_CHANNEL: val => (this.properties.discord.channel = val),
    DISCORD_COMMAND_ROLE: val => (this.properties.discord.commandRole = val),
    DISCORD_OWNER_ID: val => (this.properties.discord.ownerId = val),
    DISCORD_PREFIX: val => (this.properties.discord.prefix = val),
    MESSAGE_MODE: val => (this.properties.discord.messageMode = val),
  }

  constructor() {
    if (fs.existsSync('config.json')) {
      this.properties = require('../config.json')
    }

    for (let environment of Object.keys(process.env)) {
      if (this.environmentOverrides.hasOwnProperty(environment)) {
        this.environmentOverrides[environment](process.env[environment])
      }
    }
  }

  get discord() {
    return this.properties.discord
  }
}

module.exports = Configuration
