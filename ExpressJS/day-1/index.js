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
    const { name } = req.query;

    if (name) {
        const user = userData.filter((user) => {
            return user.name === name;
        })
        res.status(200).send(user)
    }

    res.status(200).send(userData)
})

// router params
app.get('/api/v1/users/:id', (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id)

    const user = userData.find((user) => user.id === parsedId)


    res.status(200).send(user)
})



app.listen(PORT, (req, res) => {
    console.log(`Server Run in Port: ${PORT}`)

})
