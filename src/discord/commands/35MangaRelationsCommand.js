const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class MangaRelationsCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'm-relations'
    this.aliases = ['mrela']
    this.description = 'Sends the manga relations of given manga'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let manga = args.shift()

    if (manga == undefined){message.channel.send(`Usage: !m-relations [name]`)}
    else{
      if (manga != undefined){
        fetch(`https://api.jikan.moe/v4/manga?q=${manga}`)
        .then(result => result.json())
        .then(({ data }) => {
          if (data.length >= 1){
            var totaldata = ["Choose the number you want:"]
            for (let x = 0; x < 5 && x < data.length; x++){
              totaldata.push(`${x+1}: ${data[x].title}`)
            }
            let filter = m => m.author.id === message.author.id
            message.channel.send(totaldata.join('\n')).then(() => {
              message.channel.awaitMessages(filter, {max:1,time: 10000,errors: ['time']})
              .then (message => {
                message = message.first()
                if (parseInt(message) <= 5 || parseInt(message) >= 1){
                  data = data[parseInt(message)-1]}
                else{data = data[0]}
                
            var mangaid = data.mal_id
            var animepng = data.images.jpg.large_image_url
            var animeurl = data.url
            fetch(`https://api.jikan.moe/v4/manga/${mangaid}/relations`)
            .then(result => result.json())
            .then(({ data }) => {

              var Data = []

              for (let x = 0; x < 10 && x < data.length; x++){
                Data.push(`${data[x].relation}: ${data[x].entry[0].name} (${data[x].entry[0].type}) \n${data[x].entry[0].url}\n`)
              }
              
              message.channel.send({
                embed: {
                  title: "Anime Relations",
                  description: "",
                  fields: {name: 'Relations',value: Data.join('\n')},
                  image: {url: animepng},
                  url: animeurl,
                  color: message.guild.me.displayHexColor,
                  footer: Footer,
                  timestamp: new Date()
                }
              })

            }).catch(err => {console.error(err);})
            })
              
            }).catch(err => {console.error(err);})
          }
          else{message.channel.send(`Manga Not Found`)}
        }).catch(err => {console.error(err);})
      }  
      else{message.channel.send(`Usage: !m-relations [name]`)}
    }
    
  }
}

module.exports = MangaRelationsCommand