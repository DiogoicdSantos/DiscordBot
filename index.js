require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log('The bot is online!');
});

client.login(token);