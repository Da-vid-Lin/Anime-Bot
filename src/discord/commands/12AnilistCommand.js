const DiscordCommand = require('../../contracts/DiscordCommand')

class AniListCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'anilist'
    this.aliases = ['ani']
    this.description = 'Sends the anilist of given user'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let profile = args.shift()
    let type = args.shift()

    if (profile == undefined){message.channel.send(`Usage: !anilist [profile] <type> \nTypes: [anime,manga]`)}
    else{
      if (type == undefined){message.channel.send(`https://anilist.co/user/${profile}`)}
      else if (type == "anime"){message.channel.send(`https://anilist.co/user/${profile}/animelist`)}
      else if (type == "manga"){message.channel.send(`https://anilist.co/user/${profile}/mangalist`)}
      else{message.channel.send(`https://anilist.co/user/${profile}`)}
    }

  }
}

module.exports = AniListCommand