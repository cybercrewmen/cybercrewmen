module.exports = {
    name : "kick",
    description : "idk",
    execute(message, args){
        
        const member = message.mentions.users.first();
        const reason = args.slice(1).join(" ") || "no reason"
       
        
        if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply({embed : {title : "ERROR" , color : "RED" , description : "YOU NEED A SPECIFIC PERMISSION TO USE THE COMMAND"}})
        if(!member) return message.reply({embed : {title : "ERROR" , color : "RED" , description : "you need to mention user first!"}});

        const memberTarger = message.guild.members.cache.get(member.id)

        if(member === message.author) return message.reply({embed : {title : "ERROR" , color : "RED" , description : "you cannot kick yourself"}})
        if(memberTarger.hasPermission("ADMINISTRATOR")) return message.channel.send({embed : {title : "ERROR" , color : "RED" , description :"that user has admin!"}})
        if(!message.guild.member(member).bannable) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"that user cannot be kicked"}})
        
        
        
        
        if (member){
            
            memberTarger.user.send({embed : {title : "kick command" , color : "GREEN" ,description : `you have been kicked \n **reason : ${reason}**` }}).catch(e => {console.error(e)})
            
            message.channel.send({embed : {title : "kick command" , color : "GREEN" , description : `${member} has been kicked from ${message.guild.name} \n reason : ${reason} `}}).then(memberTarger.kick())

            

        }
    }
}