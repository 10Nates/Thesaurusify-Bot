const Discord = require('discord.js');
const bot = new Discord.Client();
const cmd = require('./extras');

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === '!overcomp') {
        msg = cmd.synonymify(args);
        message.channel.send(msg);
        cmd.logmsg(msg, message, bot);
    }

    /*if (command === '!overdef') {
        msg = cmd.stringdef(args);
        message.channel.send(msg);
        cmd.logmsg(msg, message, bot);
    } */

    cmd.runHive(message, bot);

});

bot.login('NDUzNDA0ODEzNjQwODU5NjQ4.DfeZqA.6QTuZt8_LRW-WW0kQHYEBWUEr7I');