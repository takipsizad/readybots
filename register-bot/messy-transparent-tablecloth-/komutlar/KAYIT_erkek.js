let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  try {
      let kayıteks = await db.fetch(`kayıteks.${message.guild.id}`)
  let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
  let otokayıt = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
  let tag = await db.fetch(`kayıttag.${message.guild.id}`)
  let kayıte = await db.fetch(`kayıte.${message.guild.id}`)
  let embed = await db.fetch(`kmesajembed.${message.guild.id}`)
   let kisim2 = await db.fetch(`kisimdüzenisc.${message.guild.id}`)

  let kayıtlog = await db.fetch(`logkayıt.${message.guild.id}`)
  let agacim = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
let kisim = await db.fetch(`kisim.${message.guild.id}`)
if(!kayıty) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt yetkilisi ayarlanmamış!`).setColor(hata))
if(!kayıte) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt erkek rolü ayarlanmamış!`).setColor(hata))
if(!kayıtlog) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt logu ayarlanmamış!`).setColor(hata))
if(!agacim) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt alınacak rol ayarlanmamış!`).setColor(hata))
      let isimdüzen = await db.fetch(`isimdüzen.${message.guild.id}`)

  let kanal = client.channels.cache.get(kayıtlog)
  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))
  
let isim = args[1]
let yaş = args[2]
  let userca = message.mentions.members.first() || message.mentions.users.first()


if(!userca) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Erkek Kayıtı Yapabilmek İçin Bir Kullanıcı Etiketlemen Lazım! Örnekler Aşşağıda:

\`${prefix}erkek @etiket\`
\`${prefix}erkek @etiket Kayra 14\` `).setColor(hata))
    if(kisim) {
      
    
if(!isim || !yaş) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir İsim Ve Yaş Girmedin!').setColor(hata))
  if(isNaN(yaş)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir Yaş Girmedin!').setColor(hata))
  if(message.channel.id !== kayıtlog) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription('Bu Kodu Sadece Kayıt Kanalında Kullanabilirsin'))
  if(!userca.roles.cache.has(agacim)) return message.channel.send({embed: {color : hata, description: `Kayıt Edeceğin Kullanıcı <@&${agacim}> Rolüne Sahip Olması Lazım`}})
      userca.setNickname(`${isim} | ${yaş}`)
    }
      db.add(`say.erkek.${message.author.id}.${message.guild.id}`, 1)
              db.add(`say.toplam.${message.author.id}.${message.guild.id}`, 1)

  let guild = message.guild.name
  if(kisim2) {
    let kisim3 = kisim2.replace(`{isim}`, isim).replace(`{yas}`, yaş)
    userca.setNickname(kisim3)
  }
  
  
  if(kayıteks) {
userca.roles.add(kayıte)
  userca.roles.remove(agacim)
  }
  userca.roles.add(kayıte)
  userca.roles.remove(agacim)
  
 let msj = `
${userca} Kaydı ${message.author} Tarafından Yapıldı!

\`\`\`fix
+ Kullanıcı Başarıyla Kayıt Oldu - 🤗\`\`\`
 
${userca}, Kullanıcıya <@&${kayıte}> Rolü Verildi!

`
 
 if(embed){
   let embed = new Discord.MessageEmbed()
   .setTitle(` Kayıt Sistemi!`)
   .setDescription(msj)
   .setColor(oldu)
   .setFooter(`Kayıt Sistemi!`)
   .setThumbnail('https://www.nkfu.com/wp-content/uploads/2014/03/para-gifleri-4.gif')
message.channel.send(embed)
 } else if(!embed){
   
   message.channel.send(msj)
   
 }
    

    
  } catch (e) {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("Hata")
    .setDescription(`Bir Hatayla Karşılaştım! Hata => ${e}
    
    ${prefix}yardım`)
    .setThumbnail()
    message.channel.send(embed1)
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek", "e"],
  permLevel: 0
};

module.exports.help = {
  name: 'man'
};
