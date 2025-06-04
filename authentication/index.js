import express from "express";
import dotenv from "dotenv";
import session from "express-session";


import connectDB from "./config/db.js"
import userRoutes from "./routes/user.routes.js"
import taskRoutes from "./routes/task.routes.js"


dotenv.config()
const app = express();

app.use(express.json())

// Session config
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 6000000 } //10minutes
    })
)



const POPRT = process.env.POPRT || 3000;

// Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.use("/api/user", userRoutes)
app.use("/api/task", taskRoutes)


//DB Connection
connectDB()
    .then(() => {
        app.listen(POPRT, () => {
            console.log(`The server is runnig on this ${POPRT} `)
        })
    }).catch((error) => {
        console.error("Error connecting to the database", error.message)
    })






























