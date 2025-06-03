import express from "express";



const app = express();
const POPRT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.listen(POPRT, () => {
    console.log(`The server is runnig on this ${POPRT} `)
})





























