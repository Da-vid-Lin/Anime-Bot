const DiscordCommand = require('../../contracts/DiscordCommand')

class MyAnimeListCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'myanimelist'
    this.aliases = ['mal']
    this.description = 'Sends the myanimelist of given user'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let profile = args.shift()
    let type = args.shift()

    if (profile == undefined){message.channel.send(`Usage: !myanimelist [profile] <type> \nTypes: [anime,manga]`)}
    else{
      if (type == undefined){message.channel.send(`https://myanimelist.net/profile/${profile}`)}
      else if (type == "anime"){message.channel.send(`https://myanimelist.net/animelist/${profile}?status=1`)}
      else if (type == "manga"){message.channel.send(`https://myanimelist.net/mangalist/${profile}?status=1`)}
      else{message.channel.send(`https://myanimelist.net/profile/${profile}`)}
    }

  }
}

module.exports = MyAnimeListCommand