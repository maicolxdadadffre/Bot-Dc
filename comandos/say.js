const {MessageEmbed} = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    name: 'say',
    alias: ['hablar'],
    
async execute (client, message, args){
  
  
  
  
  let hablar = args.join(" ")
  
  if(!hablar) return message.replay("**No Puedo Enviar Un Mensaje Sin Contenido En Su Interior**")
  
  let comandohablar = new Discord.MessageEmbed()
  
  
  .setTitle("Anonimo 👤")
  .setDescription(hablar)

message.delete()




  
  message.channel.send(comandohablar)


 }

}