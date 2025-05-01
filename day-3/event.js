
const eventEmitter = require("events")

const emitter = new eventEmitter()

// keymethods
// on(eventName , Listener) -- create

emitter.on("GREET", (args)=>{
    console.log(`Hello Bhai ${args.username} my id is ${args.id}`)
})

emitter.emit("GREET",{
    username:"Shaddy",
    id:"dy387bd387h23s"
})
