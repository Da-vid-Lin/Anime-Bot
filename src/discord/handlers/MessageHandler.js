const fs = require('fs')

class MessageHandler {
  constructor(discord, command) {
    this.discord = discord
    this.command = command
  }
  
  async onMessage(message) {

    if (this.command.handle(message)) {
      return
    }
  }
}

module.exports = MessageHandler
