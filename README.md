
# Platform Chaser
Basic discord bot that utilises myanimelist api to fetch information about an anime or manga and return it in a user friendly format

# Features
- GUI navigation with options, leaderboard and level selection 
- Collectible points that change colours before disappearing
- Random power ups to aid the player 
- Customizable keyboard controls
- Dynamic movement for the player 

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