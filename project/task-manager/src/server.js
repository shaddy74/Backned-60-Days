import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser"


import authRoute from "../routes/auth.route.js";


const app = express();

const PORT = 3000;

// global middleware
app.use(express.json())

app.use(session(
    {
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24
        }
    }
))


app.use(cookieParser())


app.get("/", (req, res) => {
    res.status(200).send("Welcome to Task manager API")
})


app.use("/auth", authRoute)





app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})