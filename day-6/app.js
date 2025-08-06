import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import connectDB from "./db/database.js";
import userRoute from "./routes/user.js"

const app = express()

dotenv.config();

connectDB();

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/user", userRoute)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})