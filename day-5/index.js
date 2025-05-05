const crypto = require('crypto')

// 1. random
const randomValues = crypto.randomBytes(16)
console.log(randomValues.toString("hex"))


// 2. createHash
const hashValue = crypto.createHash("sha256").update("shaddy").digest("hex")

const inputValue = "shaddy"
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

if (hashValue === matchValue) {
    console.log("You can login")
}
else {
    console.log("you can't login")
}

// learn about encryption & decryption