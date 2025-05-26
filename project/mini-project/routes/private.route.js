import express from "express";
import authMiddleware from "../middleware/auth.Middleware.js";
const router = express.Router();


// dashboarcd (accesstoken)

router.get('/dashboard',authMiddleware ,(req,res)=>{
    res.status(200).send({
        message:`Welcome to the Dashboard ${req.user.name}`
    })
})

export default router;