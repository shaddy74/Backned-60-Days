import express from "express"
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000;

app.use(session(
    {
        secret: "mysecret",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 // 24 hours
        }
    }
))


app.use(cookieParser("shaddy"))


app.get("/", (req, res) => {
    console.log(req.session)
    console.log(req.session.id)

    res.status(200).send("Hello world")
})


app.get("/login", (req, res) => {
    req.session.user = {
        name: "shadab",
        email: "sadab45@gmail.com",
        age: 30

    }
    res.send(`${req.session.user.name} is logged in`)
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("Logged Out")
});



app.listen(PORT, () => {
    console.log(`server is running is ${PORT}`)
})