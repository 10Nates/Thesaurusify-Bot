const Discord = require('discord.js');
const bot = new Discord.Client();
const moby = require('moby');

function getlength(number) {
    return number.toString().length;
}

ChanID = 'No ChanID specified';
module.exports = {

    logmsg: function logmsg(msg, message, bot) {
        bot.channels.get('449759068941189151').send(`recieved: ${message.author.username} - ${message.content}`);
        bot.channels.get('449759068941189151').send(`Sent: ${msg}`);
        console.log(message.author.username + ' - ' + message.content);
        console.log(`sent: ${msg}`);
    },

    runHive: function runHive(message, bot) {
        const argz = message.content.split(/ +/g);
        if (message.author.id === '186507006008360960') {
            if (message.channel.id === '449759045491097610') {
                if (getlength(argz[0]) == 18) {
                    msg = message.content.replace(argz[0] + ' ', ''); /*.replace(/!!HIVEMINDovrd /g, '')*/
                    bot.channels.get(argz[0]).send(msg);
                    bot.channels.get('449759068941189151').send(`recieved: ${message.author.username} - ${message.content}`);
                    bot.channels.get('449759068941189151').send(`Sent: ${msg} to <#${argz[0]}>`);
                    console.log(message.author.username + ' - ' + message.content);
                    console.log(`Sent: ${msg} to <#${argz[0]}>`);
                    ChanID = argz[0];
                } else {
                    bot.channels.get(ChanID).send(message.content);
                    bot.channels.get('449759068941189151').send(`recieved: ${message.author.username} - ${message.content}`);
                    bot.channels.get('449759068941189151').send(`Sent: ${message.content} to <#${ChanID}>`);
                    console.log(message.author.username + ' - ' + message.content);
                    console.log(`Sent: ${message.content} to <#${ChanID}>`);
                }
            }
        }
    },

    synonymify: function synonymify(text) {
        var textcount = text.length - 1;
        var textcounter = 0;
        var posttext = text;

        while (textcount >= textcounter) {
            'use strict';
            var searcher = moby.search(text[textcounter]);
            var randomizer = searcher[Math.floor(Math.random() * searcher.length)];
            
            if (randomizer != '') {
                posttext[textcounter] = randomizer;
            }

            textcounter = textcounter + 1;
        }

        var finaltext = posttext.join(' ');
        return (finaltext);

    }



}
