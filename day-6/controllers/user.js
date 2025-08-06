import { User } from "../model/user.js";
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(403).json({
                success: false,
                message: "This email ID is already registered"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "Account Created Successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "Incorrect email or password"
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(403).json({
                success: false,
                message: "Incorrect email or password"
            });
        };666
        res.status(200).json({
            success: true,
            message: `Welcome back ${user.fullName}`
        });
    } catch (error) {
        console.log(error);
    }
}