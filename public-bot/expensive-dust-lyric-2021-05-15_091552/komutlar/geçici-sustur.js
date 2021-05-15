const Discord = require("discord.js");
const ms = require("ms");
 
module.exports.run = async (bot, message, args) => {
 
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Yapmak İçin Kick Members Yetkisine Sahip Olmalısın.")
 
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(2).join(' ');
      let guild = message.guild
          const mod = message.author;
 
    let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
    if (reason.length < 1) return message.reply('Yanlış kullanım !mute <kullanıcı> <süre> <sebep>');
 if(!tomute) return message.reply("Doğru Kullanım: !mute <oyuncu> <süre> <sebep>");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");
let muterole = message.guild.roles.find(r => r.name === "Susturulmuş");
 
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturulmuş",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("Doğru Kullanım: c!sustur <oyuncu> <süre> <sebep>");
 
  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> **için sohbet kapatıldı! Süre: ${ms(ms(mutetime))}**`);
 
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`**<@${tomute.id}> Kişinin susturulma süresi dolduğu için mutesi kaldırıldı!**`);
  }, ms(mutetime));
    await (tomute.addRole(muterole.id));
 
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Eylem: Geçici Susturma')
            .addField('Kullanıcı', `<@${tomute.id}>`)
            .addField('Süre', `${ms(ms(mutetime))}`)
            .addField('Sebep', `${reason}`)
            .addField('Moderatör', `${mod}`)
            .setColor('GREY')
  return guild.channels.get(modlog.id).sendEmbed(muteembed);
 
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'mute', 'Mute', 'sustur'],
  permLevel: 2
};
 
exports.help = {
  name: 'geçicisustur',
  description: 'Sureli Susturur.',
  usage: 'geçici-sustur [Kullanıcı] [Süre]'
};
