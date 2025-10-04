const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class JapanTitleCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'japantitle'
    this.aliases = ['jptitle']
    this.description = 'Sends the japanense title of given animanga'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let anime = args.shift()

    if (anime == undefined){message.channel.send(`Usage: !jptitle [name]`)}
    else{
      if (anime != undefined){
        fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
        .then(result => result.json())
        .then(({ data }) => {

              var Data = []

              for (let x = 0; x < 10 && x < data.length; x++){
                Data.push(`${data[x].title}: ${data[x].title_japanese}`)
              }
              
              message.channel.send({
                embed: {
                  title: "Japanese Title",
                  description: "",
                  fields: {name: 'Title',value: Data.join('\n')},
                  image: {url: data[0].images.jpg.large_image_url},
                  url: data[0].url,
                  color: message.guild.me.displayHexColor,
                  footer: Footer,
                  timestamp: new Date()
                }
              })
              
        }).catch(err => {console.error(err);})
      }  
      else{message.channel.send(`Usage: !a-jptitle [name]`)}
    }
    
  }
}

module.exports = JapanTitleCommand