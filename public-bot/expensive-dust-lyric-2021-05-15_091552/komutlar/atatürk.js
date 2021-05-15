const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');


exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
    
    request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
    var info = JSON.parse(body); 
    var thyke = info.link;
    const ataturk = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setDescription('')
    .setImage(thyke)
    return message.channel.sendEmbed(ataturk);

    }
});
}
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atatürk',
description: 'atatürk',
usage: 'atatürk'
};
