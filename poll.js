const Discord = require('discord.js')


module.exports = {
    name : "poll",
    description : "idk",
    async execute(message, args){
        const pollchannel = message.mentions.channels.first();
        const polldesc = args.slice(1).join(" ")
        
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed : {color : "RED", description : "you need admin to use this command!"}})
        if(!pollchannel) return message.channel.send({embed : {color : "RED" , description : "you must enter a channel name!"}})
        if(!polldesc) return message.channel.send({embed : {color : "RED" , description : "you must enter a polltext first!"}})
        const pollembed = new Discord.MessageEmbed()
        .setTitle("🎉 NEW POLLS! 🎉")
        .setColor("YELLOW")
        .setDescription(`**${polldesc}** \n Author : **${message.author.username}**`)
    
        pollchannel.send(pollembed).then(pollembed => {
            pollembed.react("👍")
            pollembed.react("👎")



            message.channel.send({embed : {title : "poll command" , color : "GREEN" , description : `successfully sent message in ${pollchannel}! \n message : ${polldesc}`}})
        })
    }
}