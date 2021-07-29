const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "leave",
    
async execute(client, message, args) {

  const voiceChannel = message.member.voice.channel;

  if(!voiceChannel) return message.channel.send("Nesecitas Estar En Un Canal De Voz!")
  await voiceChannel.leave();

  const embed = new Discord.MessageEmbed()

.setTitle("Adios | 👋")

  message.channel.send(embed)


 }

}