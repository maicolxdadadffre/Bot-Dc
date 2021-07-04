const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "stop",
    
execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("**Debes Estar En Un Canal De Voz!**")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
  return message.channel.send("**Debes Estar En El Mismo Canal Que Yo!**")

  if(!serverQueue) return message.channel.send("**No Hay Canciones En Reproduccion**")

  if(serverQueue.pause) return message.channel.send("**La Musica Ya Esta Pausada**")

  client.distube.pause(message)

  const embed = new Discord.MessageEmbed()

.setTitle("⏸️")




  message.channel.send(embed)



 }

}