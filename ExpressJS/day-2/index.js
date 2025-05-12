import express from "express"
import userRouter from "./routers/user.routes.js";

const app = express();
const PORT = 3000;

app.use("/api",userRouter)


app.get("/", (req, res) => {
    res.send("Hello World")
})




app.listen(PORT, () => {
    console.log("Heelo the server is running on", PORT);
})

