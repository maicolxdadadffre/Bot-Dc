const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    
execute (client, message, args){

const embed = new Discord.MessageEmbed()

.addField("Mi Ping | 🛰️",`${client.ws.ping}`)
.setColor("RANDOM")

  message.channel.send(embed)

 }

}