module.exports = {
    name: 'purge',
    description : 'E', 
    async execute(message,args){
        const deleted = args[0]
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"YOU NEED THE BE THE ADMIN TO USE THE PURGE COMMAND"}})
        if (!args[0]) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"YOU MUST SPECIFY A NUMBER!"}});
        if (isNaN(args[0])) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"YOU MUST ENTER A REAL NUMBER!"}});
        if (args[0] > 100) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"YOU CANNOT PURGE MORE THAN 100 MESSAGES!"}});
        if (args[0] < 1) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"YOU NEED TO AT LEAST PURGE 1 MESSAGE!"}})
        if (deleted) message.channel.bulkDelete(1)

        await message.channel.messages.fetch({limit : deleted})
            message.channel.bulkDelete(deleted)
            
        
        message.channel.send({embed : {title : "purge command",color : "GREEN" , description : `successfully deleted ${deleted} messages!`}})
        
        
    } 
}