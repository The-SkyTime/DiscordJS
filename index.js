/* eslint-disable indent */
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    prefix,
    token,
    } = require('./config.json');

client.once('ready', () => {
    console.log('Bot Started.');
});

client.login(token);

client.on('message', message => {
    // Says the name of the server
    if (message.content === `${prefix}name`) {
        message.channel.send(message.guild.name);
    }
    // Says how many people are online right now
    else if (message.content === `${prefix}online`) {
        message.channel.send(`Total Members: \n ${message.guild.memberCount}`);
    }
    // Says the Username and ID of the sender
    else if (message.content === `${prefix}me`) {
        message.channel.send(`Username: \n ${message.author.username}`);
        message.channel.send(`ID: \n ${message.author.id}`);
    }
});