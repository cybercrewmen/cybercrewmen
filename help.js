const Discord = require('discord.js')

const embed = new Discord.MessageEmbed()
.setTitle("help command")
.setDescription("here's some basic commands from EBOT! \n 🃏 purge,`<command> <number>` \n 🔨ban,`<command> <mention> <reason>` \n 🦵kick,`<command> <mentions> <reason>` \n 🔇mute,`<command> <mentions> <reason>` \n 🔈unmute,`<command> <mentions> <reason>` \n 🗣️opinion,`<command> <question>` \n 📛nick,`<command> <mention> <name>` \n 🗨️dm,`<command> <mentions> <message>`\n🎓polls,`<command> <poll-channel> <poll-message>` \n 💤afk,` <command> <reason(optional)>`")
.setColor("#2ECC71")


module.exports = {
    name : 'help',
    description : "idk",
    execute(message, args){
        message.channel.send(embed)
    }
}