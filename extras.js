const moby = require('moby');
const rempunc = require('remove-punctuation')
const fs = require('fs')
const dict = require('word-definition').getDef;

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
                    msg = message.content.replace(argz[0] + ' ', '');
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
        var midtext = rempunc(text.join(' ')).split(' ')
        var posttext = midtext

        while (textcount >= textcounter) {
            'use strict';
<<<<<<< HEAD

            var searcher = moby.search(midtext[textcounter]);
            var randomizer = searcher[Math.floor(Math.random() * searcher.length)];

            if (randomizer != null) {
                onlypunct = text[textcounter].replace(midtext[textcounter], '')
                posttext[textcounter] = randomizer + onlypunct;
            }
            textcounter = textcounter + 1;
        }

        var finaltext = posttext.join(' ');
        return (finaltext);

    },

    /* Broken Code, still in development

        stringdef: function stringdef(text) {
            var textcount = text.length - 1;
            var textcounter = 0;
            var pretext = rempunc(text.join(' '))
            var midtext = pretext.split(' ')
            var posttext = midtext
            while (textcount >= textcounter) {
                console.log(midtext)
                dict(midtext[textcounter], "en", null, function (response) {
                fs.writeFileSync('temp/defstringtemp.txt', response.definition)
            })
                defstring = fs.readFileSync('temp/defstringtemp.txt')
                perrem = defstring.replace('.', '')
                onlypunct = text[textcounter].replace(midtext[textcounter], '')
                'use strict';
                posttext[textcounter] = perrem + onlypunct;
                console.log(posttext)

<<<<<<< HEAD
                textcounter = textcounter + 1;
            }
            const finaltext = posttext.join(' ') + '.';
            return (finaltext);

        }
        */
}
=======
}
>>>>>>> c6c6da8583be6294a79039227b7b4734b5b3e4de
