const DiscordCommand = require('../../contracts/DiscordCommand')
var word = ["One","Two","Three","Four","Five","Six"];
class DiceRollCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'diceroll'
    this.aliases = ['dice']
    this.description = 'Dice Roll'
  }

  onCommand(message) {
    var result = word[Math.floor(Math.random()*word.length)];
    message.channel.send({
      embed: {
        title: `Dice Roll Result`,
        description: `${result}`,
        color: message.guild.me.displayHexColor,
      }
    })
  }
}

module.exports = DiceRollCommand