import express from "express";


import connectDB from "./config/db.js"
import userRoute from "./routes/user.routes.js"


const app = express();

const PORT = 3000;



// connect to DB
app.use(express.json())
connectDB();
app.use("/api/", userRoute)


app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})



app.listen(PORT, () => {
    console.log(`this app is running route upon ${PORT}`);
})





