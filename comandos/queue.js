const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "queue",
    alias: ["q"],
    
execute (client, message, args){

  const queue = client.distube.getQueue(message)

  if(!queue) return message.channel.send("**No Hay Canciones En Reproduccion**")

  const embed = new Discord.MessageEmbed()

  .setTitle("📋 Listado")
  .setDescription('\n' + queue.songs.map((song, id) => `**${id * 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 11).join("\n"))

  message.channel.send(embed)

 }

}