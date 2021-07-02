module.exports = {
    name : "copy",
    description : "idk",
    execute(message, args){
        const copy = args.slice(0).join (" ")
        message.channel.send(copy)
    }
}