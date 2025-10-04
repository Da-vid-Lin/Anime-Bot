const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class AnimeSearchCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'a-search'
    this.aliases = ['asear']
    this.description = 'Sends the mal of given anime'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let anime = args.shift()

    if (anime == undefined){message.channel.send(`Usage: !a-search [name]`)}
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
                var Genre = []
                for (let x = 0; x < (data.genres).length; x++){
                  Genre.push(data.genres[x].name)
                }
                var Title = ""
                if (data.title_english == null){Title = data.title}
                else{Title = data.title_english}
                var Info = [`Title: ${Title}`,
                            `Type: ${data.type}`,
                            `Episodes: ${data.episodes}`,
                            `Status: ${data.status}`,
                            `Aired: ${data.aired.string}`,
                            `Duration: ${data.duration}`,
                            `Genres: ${Genre}`
                          ]
                var Stat = [`Score: ${data.score} by ${data.scored_by} users`,
                            `Favourited by ${data.favorites} users`,
                            `Popularity Ranking: ${data.popularity}`,
                            `Total Members: ${data.members}`
                          ]
                message.channel.send({
                  embed: {
                    title: "Anime Search",
                    description: "",
                    fields: [{name: 'Information',value: Info.join('\n')},
                            {name: `Statistics`,value: Stat.join('\n')}],
                    image: {url: data.images.jpg.large_image_url,},
                    url: data.url,
                    color: message.guild.me.displayHexColor,
                    footer: Footer,
                    timestamp: new Date()
                  }
                })
              }).catch(err => {console.error(err);})
            })
            
          }
          else{message.channel.send(`Anime Not Found`)}
          }).catch(err => {console.error(err);})
      }  
      else{message.channel.send(`Usage: !a-search [name]`)}
    }
    
  }
}

module.exports = AnimeSearchCommand