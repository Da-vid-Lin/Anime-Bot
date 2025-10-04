const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class RandomCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'random'
    this.aliases = ['rng']
    this.description = 'Sends a random manga/anime/character'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let type = args.shift()

    if (type == undefined){message.channel.send(`Usage: !random <type> \nTypes: [anime,manga,character]`)}
    else{
      if (type == "anime"){
        fetch("https://api.jikan.moe/v4/random/anime")
        .then(result => result.json())
        .then(({ data }) => {
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
              title: "Random Anime",
              description: "",
              fields: [{name: 'Information',value: Info.join('\n')},
                      {name: `Statistics`,value: Stat.join('\n')}],
              image: {
                url: data.images.jpg.large_image_url,
              },
              url: data.url,
              color: message.guild.me.displayHexColor,
              footer: Footer,
              timestamp: new Date()
            }
          })  
        }).catch(err => {console.error(err);})
      }
        
      else if (type == "manga"){
        fetch("https://api.jikan.moe/v4/random/manga")
        .then(result => result.json())
        .then(({ data }) => {
          var Genre = []
          for (let x = 0; x < (data.genres).length; x++){
            Genre.push(data.genres[x].name)
          }
          var Title = ""
          if (data.title_english == null){Title = data.title}
          else{Title = data.title_english}
          var Info = [`Title: ${Title}`,
                      `Type: ${data.type}`,
                      `Chapters: ${data.chapters}`,
                      `Status: ${data.status}`,
                      `Published: ${data.published.string}`,
                      `Genres: ${Genre}`
                     ]
          var Stat = [`Score: ${data.score} by ${data.scored_by} users`,
                      `Favourited by ${data.favorites} users`,
                      `Popularity Ranking: ${data.popularity}`,
                      `Total Members: ${data.members}`
                     ]
          message.channel.send({
            embed: {
              title: "Random Manga",
              description: "",
              fields: [{name: 'Information',value: Info.join('\n')},
                      {name: `Statistics`,value: Stat.join('\n')}],
              image: {
                url: data.images.jpg.large_image_url,
              },
              url: data.url,
              color: message.guild.me.displayHexColor,
              footer: Footer,
              timestamp: new Date()
            }
          })  
        }).catch(err => {console.error(err);})
      }

      else if (type == "character"){
        fetch("https://api.jikan.moe/v4/random/characters")
        .then(result => result.json())
        .then(({ data }) => {
          var Info = [`Name: ${data.name}`,
                      `Favourited By: ${data.favorites}`
                     ]
          message.channel.send({
            embed: {
              title: "Random Character",
              description: "",
              fields: {name: 'Information',value: Info.join('\n')},
              image: {
                url: data.images.jpg.image_url,
              },
              url: data.url,
              color: message.guild.me.displayHexColor,
              footer: Footer,
              timestamp: new Date()
            }
          })  
        }).catch(err => {console.error(err);})
      }
        
      else{
        message.channel.send(`Usage: !random <type> \nTypes: [anime,manga,character]`)
      }
      
    }

  }
}

module.exports = RandomCommand