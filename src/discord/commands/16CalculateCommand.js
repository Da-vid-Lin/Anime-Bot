const DiscordCommand = require('../../contracts/DiscordCommand')

class CalculateCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'calculate'
    this.aliases = ['calc','math']
    this.description = 'Calculates maths'
  }

  onCommand(message) {
    try {
      let str = this.getArgs(message).join(' ').replace(/[^-/()\d*+.]/g, '');
      let result = eval(str);
      if(isNaN(result)) message.channel.send({
      embed: {
        title: `Invalid Input!`,
        color: message.guild.me.displayHexColor,
      }
    })
      else message.channel.send({
      embed: {
        title: `Answer To ${str}:`,
        description: `${result}`,
        color: message.guild.me.displayHexColor,
      }
    })
    } catch {
      message.channel.send({
      embed: {
        title: `Invalid Input!`,
        color: message.guild.me.displayHexColor,
      }
    })
    }
  }
}

module.exports = CalculateCommand