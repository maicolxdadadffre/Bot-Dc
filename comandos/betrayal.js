const Discord = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
    name: "youtube",
    alias: ["yt"],
    
execute (client, message, args){

  let channel = message.member.voice.channel;
  if(!channel) return message.channel.send("**Nesecitas Estar En Un Canal De Voz!**")

  fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
        max_age: 86400,
        max_uses: 0,
        target_application_id: "755600276941176913",
        target_type: 2,
        temporary: false,
        validate: null
      }),
    headers: {
    "Authorization": `Bot ${client.token}`,
    "Content-Type": "application/json"
  }

}).then(res => res.json())
.then(invite =>{
  if(!invite.code) return message.reply("**:x: No Se Pudo Iniciar Correctamente**")

const embed = new Discord.MessageEmbed()

.setTitle("Youtube Together")
.setDescription(`https://discord.com/invite/${invite.code}`)

  message.channel.send(embed)
})


}
}