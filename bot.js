const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("537560834248015875")
setInterval(function() {
channel.send(im not noob u are the noob im just Doing my work dont do like cause im L);
}, 30)
})

client.login(process.env.BOT_TOKEN);
