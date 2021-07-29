const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "snipe",
    
execute (client, message, args){

  const channel = message.mentions.channels.first() || message.channel;

  const msg = client.snipes.get(channel.id)

if(!msg){
message.channel.send("**No Tengo Registro De Algun Mensaje Borrado**")
} else {
const embed = new Discord.MessageEmbed()

.setTitle("Snipe")
.setAuthor(`Mensaje Escrito Por ${msg.delete.tag}`, msg.delete.displayAvatarURL())
.addField("Canal", `<#${msg.canal.id}>`)
.setDescription(msg.content)
.setColor("RED")

message.channel.send(embed)
  
  }

 }

}