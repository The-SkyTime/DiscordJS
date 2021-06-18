/* eslint-disable indent */
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    prefix,
    token,
    bot_age,
    words_array,
    bot_info,
    } = require('./config.json');

client.once('ready', () => {
    console.log(prefix);
    console.log(token);
    console.log(bot_age);
    console.log(words_array[0]);
    console.log(words_array[1]);
    console.log(words_array[2]);
    console.log(bot_info.name);
    console.log(bot_info.version);
});

client.login(token);

client.on('message', message => {
    if (message.content === `${prefix}pong`) {
        message.channel.send('Pong!');
    } else if (message.content === `${prefix}sad`) {
        message.channel.send('Hello');
    }
});