import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"


import authRoutes from "./routes/auth.routes.js"
import privateRoutes from "./routes/private.route.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json())


// connect mongodb
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected Successfully")
}).catch((err) => {
    console.log("MongoDB Connection Error", err.message)
})


// Routes
app.use("/auth", authRoutes)
app.use("/private",privateRoutes)

app.listen(PORT, () => {
    console.log(`server is running on PORT no. ${PORT}`)
})





// authentication routes(Signup login)
// Private routes (JWT / authenticated)