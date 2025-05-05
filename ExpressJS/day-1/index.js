import express from 'express';
import userData from './data/data.js';

const app = express();
const PORT = 3000

// Get Request
app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

// Industry Standard
app.get("/api/v1/users", (req, res) => {
    res.status(200).send(userData)
})



app.listen(PORT, (req, res) => {
    console.log(`Server Run in Port: ${PORT}`)

})
