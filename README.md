
# Anime Bot
Basic discord bot that utilises myanimelist api to fetch information about an anime or manga and return it in a user friendly format

# Features
- Gets anime/manga information from jikan api 
- Gets random quotes from animechan api
- Gets random gifs from otakugifs api
- Utility commands like 8ball, coinflip and dice

# Installation
1. Clone or download this repository
2. Make a `config.json` file in the root following the format 
```
{
  "discord": {
    "token": "",
    "channel": "",
    "commandRole": "",
    "prefix": "!",
    "messageMode": "webhook"
  }
}
```
3. Run program with `node index.js`

# Dependencies
- chalk 4.1.2
- discord.js-light 3.5.11
- node 14.17.4
- node-fetch 2.6.7
- jikan api (https://api.jikan.moe/v4)
- animechan api (https://animechan.xyz/api)
- otakugifs (https://api.otakugifs.xyz)