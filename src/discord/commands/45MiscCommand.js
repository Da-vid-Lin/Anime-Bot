const DiscordCommand = require('../../contracts/DiscordCommand')
const hypixel = require('../../contracts/Hypixel')

class MiscCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'misc'
    this.aliases = ['extra']
    this.description = 'Multiple other commands'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let type = args.shift()
    if(type == 'test'){message.channel.send(`test`)}
    else if (type == 'r34'){message.channel.send(`https://imgur.com/a/VlvvQL6`)}
    else if (type == 'bingus'){message.channel.send(`https://imgur.com/uRcR8lL`)}
    else if (type == 'balls'){message.channel.send(`https://imgur.com/ul6XfRU`)}
    else if (type == 'troll'){message.channel.send(`https://imgur.com/qX3gv9H`)}
    else if (type == 'mike'){message.channel.send(`https://imgur.com/ed5oOP5`)}
    else if (type == 'quack'){message.channel.send(`https://imgur.com/soxAZFV`)}
    else if (type == 'sekki'){message.channel.send(`https://imgur.com/bLaOBLc`)}
    else if (type == 'emilia'){message.channel.send(`https://imgur.com/LSUIrgv`)}
    else if (type == 'fate'){message.channel.send(`https://imgur.com/cxzSNzo`)}
    else if (type == 'trap'){message.channel.send(`https://imgur.com/uGC8eq8`)}
    else if (type == 'trauma'){message.channel.send(`https://imgur.com/IYLIV8f`)}
    else if (type == 'smug'){message.channel.send(`https://imgur.com/CioSEhC`)}
    else if (type == 'cry'){message.channel.send(`https://imgur.com/AZnHo5m`)}
    else if (type == 'cri'){message.channel.send(`https://imgur.com/4dgbZQL`)}
    else if (type == 'reality'){message.channel.send(`https://imgur.com/NRsR9iK`)}
    else if (type == 'fear'){message.channel.send(`https://imgur.com/wspRkZA`)}
    else if (type == 'smirk'){message.channel.send(`https://imgur.com/RjurV7t`)}
    else if (type == 'happy'){message.channel.send(`https://imgur.com/D0HLbPO`)}
    else if (type == 'despair'){message.channel.send(`https://imgur.com/b7F1cig`)}
    else if (type == 'smile'){message.channel.send(`https://imgur.com/LSUIrgv`)}
    else if (type == 'confusion'){message.channel.send(`https://imgur.com/4JQd6h6`)}
    else if (type == 'stare'){message.channel.send(`https://imgur.com/CH4AGkg`)}
    else if (type == 'bye'){message.channel.send(`https://imgur.com/nH62e8q`)}
    else if (type == 'pinged'){message.channel.send(`https://imgur.com/LQApirl`)}
    else if (type == 'okay'){message.channel.send(`https://imgur.com/BCRJsTc`)}
    else if (type == 'wrath'){message.channel.send(`https://imgur.com/HJWMY1F`)}
    else if (type == 'mad'){message.channel.send(`https://imgur.com/Lc4Sn0H`)}
    else if (type == 'sulk'){message.channel.send(`https://imgur.com/aoGxrtV`)}
    else if (type == 'flushed'){message.channel.send(`https://imgur.com/y1rmarQ`)}
    else if (type == 'disgust'){message.channel.send(`https://imgur.com/xJD39wT`)}
    else if (type == 'shock'){message.channel.send(`https://imgur.com/IswIRy8`)}
    else if (type == 'sleepy'){message.channel.send(`https://imgur.com/JWauhNc`)}
    else if (type == 'clap'){message.channel.send(`https://imgur.com/rsvz8v0`)}
    else if (type == 'why'){message.channel.send(`https://imgur.com/RrJdQHO`)}
    else if (type == 'evil'){message.channel.send(`https://imgur.com/x9U3PZy`)}
    else if (type == 'funny'){message.channel.send(`https://imgur.com/OGGbSxv`)}
    else if (type == 'slap'){message.channel.send(`https://imgur.com/SpHK7kB`)}
    else if (type == 'kill'){message.channel.send(`https://imgur.com/CGTqZwV`)}
    else if (type == 'really'){message.channel.send(`https://imgur.com/DKm8tdV`)}
    else if (type == 'chase'){message.channel.send(`https://imgur.com/iNdBdIB`)}
    else if (type == 'rem'){message.channel.send(`who?`)}
    else if (type == 'sus'){message.channel.send(`ඞ…`)}
    else if (type == ''){message.channel.send(``)}
    else if (type == ''){message.channel.send(``)}
    else if (type == ''){message.channel.send(``)}
    else{message.channel.send(`Doesn't exist`)}
  }
}

module.exports = MiscCommand