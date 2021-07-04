const Discord = require("discord.js");

module.exports = {
    name: "skip",
    alias: ["s"],

execute (client, message, args){

  const queue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send(" **Debes Estar En Un Canal De Voz** ")

  if(message.guild.me.voice.chann && message.member.voice.channel.id !== message.guild.voice.channel.id) return message.channel.send(" **Debes Estar En Donde Estoy!** ")

  if(!queue) return message.channel.send(" **No Hay Canciones Reproduciendose** ")

  client.distube.skip(message)

  const embed = new Discord.MessageEmbed()

.setTitle("⏭️")





  message.channel.send(embed)

  
  

 }

}