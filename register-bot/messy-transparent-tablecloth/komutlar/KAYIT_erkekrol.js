let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
  if(!args[0]) return message.channel.send({embed: {color: hata, description: `
  Selam, Erkek Rolünü Ayarlamak İçin Aşşağıda Verdiğimiz Seçenekleri Kullan!:
  
  \`${prefix}k-erkek-rol @rol\`
  \`${prefix}k-erkek-rol kapat\`
  Bu Seçenekleri Kullanabilirsiniz`}})
    
  
  
  if(args[0] == 'kapat'){
        if(!db.has(`kayıte.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Kapalı!`).setColor(hata))

      db.delete(`kayıte.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt erkek rolü başarıyla kapatıldı`).setColor(oldu))
    return
  }
  
  let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bir rol etiketlemelisin!`).setColor(hata))
  
      if(db.has(`kayıte.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`kayıte.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt erkek rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-erkek-rol", "kayıterkekrol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-erkek-rol'
};
