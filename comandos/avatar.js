const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "avatar",
    
execute (client, message, args){

  let usuario = message.mentions.members.first() || message.member;

  let embedavatar = new Discord.MessageEmbed()

  .setTitle(`Avatar De ${usuario.user.username}`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
  .setFooter(`Pedido Por ${message.member.displayName}`)

  message.channel.send(embedavatar)


 }

}