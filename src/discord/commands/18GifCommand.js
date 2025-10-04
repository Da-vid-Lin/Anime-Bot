const DiscordCommand = require('../../contracts/DiscordCommand')
const fetch = require('node-fetch');

const Footer = require('../Footer.json')

const Reactions = ["airkiss","angrystare","bite","bleh","blush","brofist","celebrate","cheers","clap","confused","cool","cry","cuddle","dance","drool","evillaugh","facepalm","handhold","happy","headbang","hug","kiss","laugh","lick","love","mad","nervous","no","nom","nosebleed","nuzzle","nyah","pat","peek","pinch","poke","pout","punch","roll","run","sad","scared","shrug","shy","sigh","sip","slap","sleep","slowclap","smack","smile","smug","sneeze","sorry","stare","stop","surprised","sweat","thumbsup","tickle","tired","wave","wink","woah","yawn","yay","yes"]

class GifCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'gif'
    this.aliases = ['g']
    this.description = 'Sends a random anime gif'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let type = args.shift()

    var reaction = Reactions[Math.floor(Math.random()*Reactions.length)];
    console.log(reaction)
    if (Reactions.includes(type)){reaction = type}
    console.log(reaction)
    fetch(`https://api.otakugifs.xyz/gif?reaction=${reaction}&format=gif`)
    .then(response => response.json())
    .then(animegif => {
      message.channel.send(animegif.url)
    }).catch(err => {console.error(err);})

  }
}

module.exports = GifCommand