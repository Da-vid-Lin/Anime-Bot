const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

class MangaPicturesCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'm-pictures'
    this.aliases = ['mpict']
    this.description = 'Sends the manga pictures of given manga'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let manga = args.shift()

    if (manga == undefined){message.channel.send(`Usage: !m-pictures [name]`)}
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
            fetch(`https://api.jikan.moe/v4/manga/${mangaid}/pictures`)
            .then(result => result.json())
            .then(({ data }) => {

              for (let x = 0; x < 5 && x < data.length; x++){
                message.channel.send(`${data[x].jpg.large_image_url}`)
              } 

            }).catch(err => {console.error(err);})
            })
              
            }).catch(err => {console.error(err);})
          }
          else{message.channel.send(`Manga Not Found`)}
        }).catch(err => {console.error(err);})
      }  
      else{message.channel.send(`Usage: !m-pictures [name]`)}
    }
    
  }
}

module.exports = MangaPicturesCommand