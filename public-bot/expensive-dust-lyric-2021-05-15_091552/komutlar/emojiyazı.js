const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

var prefix = ayarlar.prefix;




const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    'İ': ':regional_indicator_i:',
    'Ö': ':regional_indicator_o:',
    'ö': ':regional_indicator_o:',
    'Ş': ':regional_indicator_s:',
    'Ü': ':regional_indicator_u:',
    'Ç': ':regional_indicator_c:', 
    'ı': ':regional_indicator_i:', 
    'o': ':regional_indicator_o:',
    'ş': ':regional_indicator_s:',
    'ğ': ':regional_indicator_g:',
    'Ğ': ':regional_indicator_g:',
    'ü': ':regional_indicator_u:',
    'ç': ':regional_indicator_c:', 
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        throw '**Bir mesaj belirt**';
    }

  		if (args.length > 50) return msg.channel.send(`${this.client.emojis.get('509395840821886986')} En fazla 50 Harf Kullanabilirsiniz.`);
  
    msg.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiyazısı', 'emojiyaz', 'emoji-yazı'],
  permLevel: 0
};

exports.help = {
  name: 'emojiyazı',
  description: 'Mesajınızı emojiye çevirir.',
  usage: 'emojiyazı <mesaj>'
};
