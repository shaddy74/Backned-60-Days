import express from "express";
import jwt from "jsonwebtoken"

import User from "../models/user.model.js"

const router = express.Router()

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) return res.status(400).json({
            message: "Username already exists.",
        });

        const newUser = new User({ username, password })
        await newUser.save();

        res.status(201).json({
            message: "user registered succesfully ",
        })
    } catch (error) {
        res.status(500).json({
            message: "somthing went worng",
            error: error.message
        })
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // find the user
        const user = await User.findOne({ username })

        // if not found return the error response
        if (!user) return res.status(401).json({ message: "Invalid username or password" })

        // if found then compare the password 
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid username or password" })

        // if not match retrun the error 
        // create a token using JWT
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token })

    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })

    }
})


export default router;