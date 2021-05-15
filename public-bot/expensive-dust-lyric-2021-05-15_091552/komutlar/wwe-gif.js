 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/HbkT5F5CiRD3O/giphy.gif", "https://media.giphy.com/media/10sDMjEoL7cAOA/giphy.gif", "https://media.giphy.com/media/xT39D7ubkIUIrgX7JS/giphy.gif", "https://media.giphy.com/media/kRWFIgO75okHm/giphy.gif", "https://media.giphy.com/media/TlK63Er4gKHILXzNeA8/giphy.gif", "https://media.giphy.com/media/14smAwp2uHM3Di/giphy.gif", "https://media.giphy.com/media/VPtakcmZS6z5K/giphy.gif", "https://media.giphy.com/media/gdKAVlnm3bmKI/giphy.gif", "https://media.giphy.com/media/VgIums4vgV4iY/giphy.gif", "https://media.giphy.com/media/l4EoX23aHCEIVlcTm/giphy.gif", "https://media.giphy.com/media/xT39CTnUseDauWbrRS/giphy.gif", "https://media.giphy.com/media/roAfEu8tdNYe4/giphy.gif", "https://media.giphy.com/media/l4Ep6mu0EsZlneBs4/giphy.gif", "https://media.giphy.com/media/g9x6SOnpJ7Mxa/giphy.gif", "https://media.giphy.com/media/RptlNBj3wJMbu/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'wwegif',
  description: 'Rastgele wwe gifi atar.',
  usage: 'wwegif'
}; 
