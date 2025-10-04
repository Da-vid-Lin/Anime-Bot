const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class AnimeStatsCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'a-stats'
    this.aliases = ['astat']
    this.description = 'Sends the anime stats of given anime'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let anime = args.shift()

    if (anime == undefined){message.channel.send(`Usage: !a-stats [name]`)}
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
            fetch(`https://api.jikan.moe/v4/anime/${animeid}/statistics`)
            .then(result => result.json())
            .then(({ data }) => {

              var Data = [`Watching: ${data.watching}`,
                          `Completed: ${data.completed}`,
                          `On Hold: ${data.on_hold}`,
                          `Dropped: ${data.dropped}`,
                          `Planned: ${data.plan_to_watch}`,
                          `Total: ${data.total}`
                         ]

              var Data1 = [`1:  ${data.scores[0].votes} (${data.scores[0].percentage}%)`,
                           `2:  ${data.scores[1].votes} (${data.scores[1].percentage}%)`,
                           `3:  ${data.scores[2].votes} (${data.scores[2].percentage}%)`,
                           `4:  ${data.scores[3].votes} (${data.scores[3].percentage}%)`,
                           `5:  ${data.scores[4].votes} (${data.scores[4].percentage}%)`,
                           `6:  ${data.scores[5].votes} (${data.scores[5].percentage}%)`,
                           `7:  ${data.scores[6].votes} (${data.scores[6].percentage}%)`,
                           `8:  ${data.scores[7].votes} (${data.scores[7].percentage}%)`,
                           `9:  ${data.scores[8].votes} (${data.scores[8].percentage}%)`,
                           `10: ${data.scores[9].votes} (${data.scores[9].percentage}%)`
                          ]
              
              message.channel.send({
                embed: {
                  title: "Anime Stats",
                  description: "",
                  fields: [{name: 'Statistics',value: Data.join('\n')},
                        {name: `Ratings`,value: Data1.join('\n')}],
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
          else{message.channel.send(`Anime Not Found`)}
        }).catch(err => {console.error(err);})
      }  
      else{message.channel.send(`Usage: !a-stats [name]`)}
    }
    
  }
}

module.exports = AnimeStatsCommand