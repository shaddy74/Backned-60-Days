import express from 'express';
import userData from './data/data.js';

const app = express();
app.use(express.json())
const PORT = 3000

//  1. GET Request
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

//  2. POST Request ( it is for sending data to server)
app.post('/api/v1/users', (req, res) => {
    const { name, username } = req.body;
    console.log(name, username);

    const newUser = {
        id: userData.length + 1,
        name,
        username
    }
    userData.push(newUser)

    res.status(201).send(
        {
            message: "User Created",
            data: newUser
        }
    )
})

//  3. PUT Request (Update All Fields)
app.put('/api/v1/users/:id', (req, res) => {
    const { body, params: { id } } = req;

    const parsedId = parseInt(id);
    const userIndex = userData.findIndex((user) => user.id === parsedId);

    if (userIndex === -1) {
        res.status(404).send("User Not Found");
    }

    userData[userIndex] = {
        id: parsedId,
        ...body,
    }

    res.status(201).send({
        message: "User Updated",
        data: userData[userIndex]
    });

})


//  3. PATCH Request (Update Ony one Specific Fields)
app.patch('/api/v1/users/:id', (req, res) => {
    const { body, params: { id } } = req;

    const parsedId = parseInt(id);
    const userIndex = userData.findIndex((user) => user.id === parsedId);

    if (userIndex === -1) {
        res.status(404).send("User Not Found");
    }

    userData[userIndex] = {
        ...userData[userIndex],
        ...body
    }

    res.status(201).send({
        message: "User Updated",
        data: userData[userIndex]
    });

})


app.listen(PORT, (req, res) => {
    console.log(`Server Run in Port: ${PORT}`)

})