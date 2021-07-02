const Discord = require('discord.js')

module.exports = {
    name : 'nick',
    desc : 'idk',
    async execute(message, args){
        let nick = args.slice(1).join(" ")
        if(!message.member.hasPermission("MANAGE_GUILD"))return message.channel.send({embed: {color : "RED" , description : "you dont have the nessecary permission!"}})
        let user = message.mentions.users.first()
        if(!user) return message.channel.send({embed : {color : "RED" , description : "you need to mention a user first!"}})
        if(!nick) return message.channel.send({embed : {color : "RED", description  : "you need to input the nick!"}})
        let member = message.guild.members.cache.get(user.id)
        

        
        member.setNickname(nick).catch(e => {console.error(e)})
        await message.channel.send({embed: {title : "nick command" ,color : "GREEN", description : `succesfully change ${user.username} nick to ${nick}`}})
        
    }
}