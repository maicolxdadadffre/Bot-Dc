module.exports = {
name: "pull",
owner: true,
  async run(client, message, args){
    let rama;
    if(args[0]) rama = args[0]
    else rama = "main"
    require("child_process").exec(`git pull origin ${rama}`, async (err, stdout, stderr) =>{

  if (err) {

message.channel.send("Error\n" + err)

      return;

  }

let msg = await message.channel.send(`\`\`\`diff\n${stdout}\n\n+ Deseas reiniciar?\`\`\``)
await msg.react("✅")
await msg.react("❌")
      let i = 0
       await msg.awaitReactions((reaction, user) => user.id == message.author.id,
                {max: 1, time: 60000, errors: ['time'],} ).then(async collected => {
if(message.guild.me.hasPermission("MANAGE_MESSAGES")){
  
 msg.reactions.removeAll().catch(error => console.log('Failed to clear reactions: ', error));
}
if(collected.first().emoji.name == "✅"){ 
  await msg.edit("Reiniciando....")
  process.exit(1)
}
if(collected.first().emoji.name == "❌"){ 
 msg.edit("No reiniciaré")
}
}).catch(() => {return i++;});
if(i===1) return  message.reply("Error! Has Tardado demasiado!");
  })
  }
}
