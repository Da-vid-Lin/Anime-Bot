const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class AnimeThemesCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'a-themes'
    this.aliases = ['athem']
    this.description = 'Sends the anime themes of given anime'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let anime = args.shift()

    if (anime == undefined){message.channel.send(`Usage: !a-themes [name]`)}
    else{
      if (anime != undefined){
        fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
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
                
            var animeid = data.mal_id
            var animepng = data.images.jpg.large_image_url
            var animeurl = data.url
            fetch(`https://api.jikan.moe/v4/anime/${animeid}/themes`)
            .then(result => result.json())
            .then(({ data }) => {
              if (data.openings.length >= 1 || data.endings.length){
                var openings = []
                var endings = []

                for (let x = 0; x < 5 && x < data.openings.length; x++){
                  openings.push(data.openings[x])
                }
                for (let x = 0; x < 5 && x < data.endings.length; x++){
                  endings.push(data.endings[x])
                }

                message.channel.send({
                  embed: {
                    title: "Anime Stats",
                    description: "",
                    fields: [{name: 'Openings',value: openings.join('\n')},
                          {name: `Endings`,value: endings.join('\n')}],
                    image: {url: animepng},
                    url: animeurl,
                    color: message.guild.me.displayHexColor,
                    footer: Footer,
                    timestamp: new Date()
                  }
                })

                if (openings.length >= 1){
                  fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAnHAXXfOjVHREPl-NJp96BoT-ntV-WuyI&q=${openings[0]}&type=video`)
                  .then(result => result.json())
                  .then(({ items }) => {
                    message.channel.send(`https://www.youtube.com/watch?v=${items[0].id.videoId}`)
                  }).catch(err => {console.error(err);})
                }
 
                if (endings.length >= 1){
                  fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAnHAXXfOjVHREPl-NJp96BoT-ntV-WuyI&q=${endings[0]}&type=video`)
                  .then(result => result.json())
                  .then(({ items }) => {
                    message.channel.send(`https://www.youtube.com/watch?v=${items[0].id.videoId}`)
                  }).catch(err => {console.error(err);})
                }
                
              }

              else{message.channel.send(`Anime Themes Not Found`)}

            }).catch(err => {console.error(err);})
            })  
              
            }).catch(err => {console.error(err);})
          }
          else{message.channel.send(`Anime Not Found`)}
        }).catch(err => {console.error(err);})
      }  
      else{message.channel.send(`Usage: !a-themes [name]`)}
    }
    
  }
}

module.exports = AnimeThemesCommand