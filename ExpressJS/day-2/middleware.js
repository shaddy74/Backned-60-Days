import express from "express"
const app = express();
const PORT = 3000;

//  1. global middleware
function sayHiMiddleware(req, res, next) {
    console.log("Hi I'm Middleware😊")
    next()
}
// app.use(sayHiMiddleware);   //global middleware call


//  2. specific route middleware
app.get("/", sayHiMiddleware, (req, res) => {
    res.send("Hello World")
})



app.listen(PORT, () => {
    console.log("Heelo the server is running on", PORT)
})


//  3. inbuilt middleware