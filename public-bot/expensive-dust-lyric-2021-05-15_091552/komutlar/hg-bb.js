const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  const mesaj2 = await db.fetch(`cikism_${message.guild.id}`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`Çıkış mesajını yazmalısın. \`${prefix}çıkışmesaj -kullanıcı- adlı kullanıcı -sunucu- adlı sunucudan ayrıldı.\``)
    }
  
    db.set(`cikism_${message.guild.id}`, mesaj)
    message.channel.send(`Çıkış mesajı \`${mesaj}\` olarak ayarlandı. Kapatmak için \`${prefix}kapat çıkışmesaj\` yazmalısın.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çıkışm','çıkış-mesaj'],
    permLevel: 3
}

exports.help = {
    name: 'çıkışmesaj',
    description: 'Çıkış mesajını ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'çıkışmesaj <yazı>'
}
