const Discord = require("discord.js");

module.exports = {
    name: "play",
    alias: ["p"],
execute (client, message, args){
  

  const cancion = args.join(" ")
  if(!cancion) return message.channel.send(" **Debes Escribir Una Cancion!** ")

  if(!message.member.voice.channel) return message.channel.send(" **Debes Estar En Un Canal De Voz!** ")

  client.distube.play(message, cancion)
  
 }

}