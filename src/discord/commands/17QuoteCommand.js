const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class QuoteCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'quote'
    this.aliases = ['q']
    this.description = 'Sends a random anime quote'
  }

  onCommand(message) {
    let args = this.getArgs(message)

    fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => {
      var Info = [`Anime: ${quote.anime}`,`Character: ${quote.character}`,`Quote: ${quote.quote}`]
      message.channel.send({
        embed: {
          title: "Anime Quote",
          description: "",
          fields: {name: ' ',value: Info.join('\n')},
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })
    }).catch(err => {console.error(err);})

  }
}

module.exports = QuoteCommand