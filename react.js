module.exports = {
    name : "react",
    description : "idk",
    async execute(message , args){
        let emoji = args[0]
        
        
        if(!emoji) return message.channel.send({embed : {title : "ERROR" ,color : "RED" , description : "you need an emoji id first!"}})
        message.react(emoji)
    }
}
