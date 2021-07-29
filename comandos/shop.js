const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "shop",
    alias: ["tienda"],
    
execute (client, message, args){

    const embed = new Discord.MessageEmbed()

    .setTitle("Tienda")
    .addField("Tienda De Objetos", "")
    .addField("Dinero","`Precio 500`")
    
      message.channel.send(embed)

 }

}