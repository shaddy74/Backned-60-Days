import express from "express";
const router = express.Router();

// dashboarcd (accesstoken)

router.get('/dashboard',(req,res)=>{
    res.status(200).send({
        message:"Welcome to Dashboard"
    })
})

export default router;