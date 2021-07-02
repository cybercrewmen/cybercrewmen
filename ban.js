module.exports = {
    name : "ban",
    description : "idk",
    execute(message, args){
        const member = message.mentions.users.first();
        const reason = args.slice(1).join(" ") || "no reason";
        

        if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"YOU NEED A SPECIFIC PERMISSION TO USE THE COMMAND"}});
        if(!member) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"you need to mention user first!"}});

        const memberTarger = message.guild.members.cache.get(member.id);

        if(memberTarger.hasPermission("ADMINISTRATOR")) return message.channel.send({embed : {title : "ERROR" , color : "RED" , description :"that user has admin!"}})
        if(!message.guild.member(member).bannable) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"that user cannot be banned"}});
        if(member === message.author) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"you cannot ban yourself"}});
        
        
        if(member){
            
            memberTarger.user.send({embed : {title : "ban command" ,color : "GREEN",description :`${member} you have been ban from ${message.guild.name} \n **reason : ${reason}**`}}).catch(e => {console.error(e) })
            message.channel.send({embed : {title : "ban command" , color : "GREEN" , description : `**${member} has been banned from ${message.guild.name}** \nreason : **${reason}**`}}).then(memberTarger.ban())
        }
    }
}