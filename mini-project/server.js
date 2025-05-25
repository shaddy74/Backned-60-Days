import express from "express"
import publicroutes from "./routes/public.route.js"
import privateroutes from "./routes/private.route.js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

if(!fs.existsSync(path.join(__dirname,"logs"))){
    fs.mkdirSync(path.join(__dirname,"logs"))
}

// Inbuilt Middleware
app.use(express.json());


//middleare to routes
app.use('/public', publicroutes)
app.use('/private', privateroutes)


app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})
