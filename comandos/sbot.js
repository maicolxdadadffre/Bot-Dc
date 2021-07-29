const {MessageEmbed} = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    name: 'sbot',
    
async execute (client, message, args){
  
  if (message.author.id !== '609357260749144084') return

  let hablar = args.join(" ")
  
  if(!hablar) return message.replay("**No Puedo Enviar Un Mensaje Sin Contenido En Su Interior**")
  
  let comandohablar = new Discord.MessageEmbed()
  
  
  .setTitle(hablar)

message.delete()




  
  message.channel.send(comandohablar)


 }

}