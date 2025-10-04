const DiscordCommand = require('../../contracts/DiscordCommand')

class PlanckeCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'plancke'
    this.aliases = ['pl']
    this.description = 'Sends the plancke of given player'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let user = args.shift()

    message.channel.send(`https://plancke.io/hypixel/player/stats/${user ? user : ''}`)
  }
}

module.exports = PlanckeCommand
