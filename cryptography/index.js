import express from "express"
import dotenv from "dotenv"
import crypto from "crypto"
import { buffer } from "stream/consumers";


dotenv.config()
const app = express();


// Generate RSA key pair
const generateKeys = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem"
        }
    })
    return { publicKey, privateKey }
}


const encrypt = (publicKey, message) => {
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message))
    return encrypted.toString("base64")
}

const decrypt = (privateKey, encryptedMessage) => {
    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, "base64"))

    return decrypted.toString("utf8")
}

const keys = generateKeys();
const publicKey = keys.publicKey;
const privateKey = keys.privateKey;

const PORT = process.env.PORT || 5000;
app.use(express.json())


app.get("/home", (req, res) => {
    res.status(200).send("Hello Word");
})


app.post("/encrypt", (req, res) => {
    const { message } = req.body;
    // operation for encryption
    const encryptedData = encrypt(publicKey, message)

    res.json({ encryptedData });
});

app.post("/decrypt", (req, res) => {
    const { encryptedMessage } = req.body;
    // operation for encryption
    const decrypted = decrypt(privateKey, encryptedMessage)
    res.json({ decrypted });
});


app.listen(PORT, (req, res) => {
    console.log(`sever is running on ${PORT}`)
    // console.log("publicKey:\n", publicKey)
    // console.log("privateKey:\n", privateKey)
})





