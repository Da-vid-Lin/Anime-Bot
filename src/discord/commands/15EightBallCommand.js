const DiscordCommand = require('../../contracts/DiscordCommand')
var word = ['It is certain.','As I see it, yes','My sources say no.','Reply hazy, try again.','Yes definitely.','Dont count on it.','Yes.','It is decidedly so.','Cannot predict now.','Most likely.','Outlook not so good.','Ask again later.','You may rely on it.','My reply is no.','Signs point to yes.','Without a doubt.','Concentrate and ask again.','Outlook good.','Very doubtful.','Better not tell you now.'];
class EightBallCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'eightball'
    this.aliases = ['8ball']
    this.description = 'Magic eight ball'
  }

  onCommand(message) {
    var result = word[Math.floor(Math.random()*word.length)];
    message.channel.send({
      embed: {
        title: `Magic 8Ball Says`,
        description: `${result}`,
        color: message.guild.me.displayHexColor,
      }
    })
    console.log(result)
  }
}

module.exports = EightBallCommand