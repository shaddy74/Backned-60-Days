import express from "express";
import cookieParser from "cookie-parser";


const app = express();

const PORT = 3000;

app.use(cookieParser("secret"))

app.get('/', (req, res) => {

    res.cookie("name", "backned", {
        maxAge: 1000 * 60 * 60 * 24,
        signed: true
    })

    res.send("Hello World");
});


app.get('/product', (req, res) => {

    console.log("Signed Cookies", req.signedCookies)
    console.log("Cookies", req.cookies)

    if (req.cookies.name && req.cookies.name === "backned") {
        res.status(200).send({
            id: 1,
            name: "item-01",
            price: "$100"
        })
    }

    else {
        res.status(403).send("You are not authorized view this page")
    }


})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});






// console.log(req.cookies) undefined
// console.log(req.headers.cookie)