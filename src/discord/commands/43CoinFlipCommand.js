const DiscordCommand = require('../../contracts/DiscordCommand')
var word = ['heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails",'heads',"tails","sides"];
class CoinFlipCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'coinflip'
    this.aliases = ['cf']
    this.description = 'Coin Flip'
  }

  onCommand(message) {
    var result = word[Math.floor(Math.random()*word.length)];
    message.channel.send({
      embed: {
        title: `Coin Flip Result`,
        description: `${result}`,
        color: message.guild.me.displayHexColor,
      }
    })
  }
}

module.exports = CoinFlipCommand