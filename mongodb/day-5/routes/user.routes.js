import express from "express"
import User from "../models/user.model.js"

const router = express.Router()

// CRUD
// 1. Create
router.post("/users", async (req, res) => {
    try {
        // get the data from request body.
        const { name, age, weight } = req.body;

        const newUser = new User({ name, age, weight });
        await newUser.save()

        res.status(201).json({
            success: true,
            data: newUser,
            message: "Successfully Created"
        });

    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

// 2. Read
router.get("/users", async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json({
            success: true,
            data: users,
            message: "User gets successfully"
        })

    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// 3. Update
router.put("/update-user/:id", async (req, res) => {

    const { id } = req.params;
    const { name, age, weight } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, { name, age, weight }, { new: true, runValidators: true })
        if (!updateUser) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            user: updateUser,
            message: "Updated Successfully"
        })

    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }


})

// 4. Delete


export default router