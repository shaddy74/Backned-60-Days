import express from "express"

const router = express.Router();




router.get('/generate-token', (req, res) => {
    const token = "toekn";

    res.status(200).send({
        message: "Token generated please save is for future use",
        token: token,
    })
})

router.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to the Home Page."
    })
})

// generate token
// home token
// 



export default router;