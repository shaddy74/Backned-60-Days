
const eventEmitter = require("events")
const fs = require("fs")

const userEmitter = new eventEmitter()


const eventCounts ={
    "Login":0,
    "LogOut":0,
    "Purchase":0,
    "Profile_Update":0
}

const Logfile = "eventlog.json" 

if(fs.existsSync(Logfile)){
    const data = fs.readFileSync(Logfile, "utf-8")
    Object.assign(eventCounts, JSON.parse(data))
}

function saveCounts(){
    fs.writeFileSync(Logfile, JSON.stringify(eventCounts, null , 2))
}

// Event Creating
userEmitter.on("Login", (username) => {
    eventCounts.Login++;
    console.log(`${username} Logged in Successfully✅`)
    saveCounts();
})


userEmitter.on("LogOut", (username) => {
    eventCounts.LogOut++;
    console.log(`${username} logout Successfully❌`)
    saveCounts();
})

userEmitter.on("Purchase", (username, item) => {
    eventCounts.Purchase++;
    console.log(`${username} purchased this ${item}`)
    saveCounts();
})

userEmitter.on("Profile_Update", (username, field) => {
    eventCounts.Profile_Update++;
    console.log(`${username} Updated their field: ${field}`)
    saveCounts();
})

userEmitter.on("Summary",()=>{
    console.log("\n Events Summary:");
    console.log(`Login: ${eventCounts.Login}`);
    console.log(`LogOut: ${eventCounts.LogOut}`);
    console.log(`Purchase: ${eventCounts.Purchase}`);
    console.log(`Profile_Update: ${eventCounts.Profile_Update}`);
})




// emit events with different arguments
userEmitter.emit("Login", "Shaddy")
userEmitter.emit("LogOut", "Shaddy")
userEmitter.emit("Purchase", "Shaddy", "Realme Phones")
userEmitter.emit("Profile_Update", "Shaddy", "Phone Number")

userEmitter.emit("Summary");