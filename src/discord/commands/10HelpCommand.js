const DiscordCommand = require('../../contracts/DiscordCommand')
const { version } = require('../../../package.json')

const Footer = require('../Footer.json')

const HelpData = ['',
                  '`!help animanga` For More Info On Main Commands',
                  '`!help anime` For More Info On Anime Commands',
                  '`!help manga` For More Info On Manga Commands',
                  '`!help miscs` For More Info On Other Commands',
                  '',
                  '`!help example [command] For An Example On Usuage`'
                 ]

const AnimangaData = ['`!myanimelist` [profile] <type> | Alias = mal',
                      '`!anilist` [profile] <type> | Alias = ani',
                      '`!random` [type] | Alias = rng',
                      '`!japantitle` [type] | Alias = jptitle',
                      '`!top` [type] <filter> | Alias = best',
                      '`!seasonal` <filter> | Alias = season',
                      '`!quote` <none> | Alias = q'
                     ]

const AnimeData = ['`!a-search` [name] | Alias = asear',
                   '`!a-statistics` [name] | Alias = astat',
                   '`!a-episodes` [name] | Alias = aepis',
                   '`!a-characters` [name] | Alias = achar',
                   '`!a-pictures` [name] | Alias = apict',
                   '`!a-themes` [name] | Alias = athem',
                   '`!a-relations` [name] | Alias = arela',
                   '`!a-similar` [name] | Alias = asimi'
                  ]

const MangaData = ['`!m-search` [name] | Alias = msear',
                   '`!m-statistics` [name] | Alias = mstat',
                   '`!m-characters` [name] | Alias = mchar',
                   '`!m-pictures` [name] | Alias = mpict',
                   '`!m-relations` [name] | Alias = mrela',
                   '`!m-similar` [name] | Alias = msimi'
                  ]

const MiscData = ['`!calc` [maths] | Alias = calc,math',
                  '`!eightball` <none> | Alias = 8ball',
                  '`!coinflip` <none> | Alias = cf',
                  '`!diceroll` <none> | Alias = dice',
                  '`!misc` [type] | Alias = extra'
                 ]


class HelpCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'help'
    this.aliases = ['h']
    this.description = 'Sends the help information'
  }
  
  onCommand(message) {
    let args = this.getArgs(message)
    let helptype = args.shift()
    let helpexample = args.shift()

    const Info = [`Prefix: \`${this.discord.app.config.discord.prefix}\``,
                  `Version: \`19.5.11.11.9\``]

    if (helptype == 'animanga'){
      message.channel.send({
        embed: {
          title: 'Animanga',
          description: ['`[ ]` = Required arguments', '`< >` = Optional arguments'].join('\n'),
          fields: [
            {
              name: 'Animanga Commands',
              value: AnimangaData.join('\n'),
            },
            {
              name: `Info`,
              value: Info.join('\n'),
            }
          ],
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })  
    }

    else if (helptype == 'anime'){
      message.channel.send({
        embed: {
          title: 'Anime',
          description: ['`[ ]` = Required arguments', '`< >` = Optional arguments'].join('\n'),
          fields: [
            {
              name: 'Anime Commands',
              value: AnimeData.join('\n'),
            },
            {
              name: `Info`,
              value: Info.join('\n'),
            }
          ],
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })  
    }
  
    else if (helptype == 'manga'){
      message.channel.send({
        embed: {
          title: 'Manga',
          description: ['`[ ]` = Required arguments', '`< >` = Optional arguments'].join('\n'),
          fields: [
            {
              name: 'Manga Commands',
              value: MangaData.join('\n'),
            },
            {
              name: `Info`,
              value: Info.join('\n'),
            }
          ],
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })   
    }

    else if (helptype == 'miscs'){
      message.channel.send({
        embed: {
          title: 'miscs',
          description: ['`[ ]` = Required arguments', '`< >` = Optional arguments'].join('\n'),
          fields: [
            {
              name: 'Miscs Commands',
              value: MiscData.join('\n'),
            },
            {
              name: `Info`,
              value: Info.join('\n'),
            }
          ],
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })
    }

    else if (helptype == 'other'){
      message.channel.send({
        embed: {
          title: 'Other',
          description: ['`[ ]` = Required arguments', '`< >` = Optional arguments'].join('\n'),
          fields: [
            {
              name: 'Other Commands',
              value: OtherData.join('\n'),
            },
            {
              name: `Info`,
              value: Info.join('\n'),
            }
          ],
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })
    }
    
    else if (helptype == 'example'){
      if(helpexample == 'example'){message.channel.send(`https://i.imgur.com/IbgT2X9.png`)}
      else{message.channel.send(`Type !help example [command] with a command`)}
    }
  
    else{
      message.channel.send({
        embed: {
          title: 'Help Menu',
          fields: [
            {
              name: 'List of all bot commands',
              value: HelpData.join('\n'),
            },
            {
              name: `Info`,
              value: Info.join('\n'),
            }
          ],
          color: message.guild.me.displayHexColor,
          footer: Footer,
          timestamp: new Date()
        }
      })
    }}

}

module.exports = HelpCommand
