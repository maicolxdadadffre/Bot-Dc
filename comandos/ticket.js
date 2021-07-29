const Discord = require("discord.js");

module.exports = {
    name: "ticket",
    
execute (client, message, args){
  
   


  let everyone = message.guild.roles.cache.find(rol => rol.name === '@everyone')

  let e = message.guild.channels.cache.find(canal => canal.name === `ticket-${message.author.username}`)
  if(e) return message.channel.send("**Ya Tienes Un Ticket En Proceso!**")

  const razon = args.join(" ")
  if(!razon) return message.channel.send("**Debes Escribir Una Razon**")
  
 
  const embed = new Discord.MessageEmbed()

.setTitle("Ticket Abierto Correctamente")
.setDescription(`A Peticion De **${message.author}**\n\nMotivo: **${razon}**`)
.setTimestamp()
.setColor("RANDOM")


message.guild.channels.create(`Ticket${message.author.username}`, {permissionOverwrites: [
  {
    id: everyone.id,
    deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
  },
  {
    id: message.author.id,
    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
  }
 ]
}).then((c) => c.send(`<@${message.author.id}>`, embed)).then((msg) => {
  msg.react('❌')

  msg.awaitReactions((reaction, user) => {
    if(message.author.id !== user.id) return;
    if(reaction.emoji.name === '❌'){
      msg.channel.delete()
    }
  })
})

message.channel.send("**Ticket Creado Correctamente Dirigete Ha La Parte Superior De Los Canales Para Ser Atendido**")

 }

}