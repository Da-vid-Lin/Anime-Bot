const DiscordCommand = require('../../contracts/DiscordCommand')

class NamemcCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'namemc'
    this.aliases = ['nmc']
    this.description = 'Sends the namemc of given player'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let user = args.shift()
    message.channel.send(`https://namemc.com/search?q=${user ? user : ''}`)
  }
}

module.exports = NamemcCommand
