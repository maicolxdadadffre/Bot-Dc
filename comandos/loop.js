const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "loop",
    
async execute (bot, message, args){

if(!message.member.voice.channel) return message.channel.send("**Debes Estar En Un Canal De Voz!**");

await bot.distube.setRepeatMode(message, parseInt(args[0]));

const embed = new Discord.MessageEmbed()

.setTitle("Loop | 🔁")

  message.channel.send(embed)

 }

}