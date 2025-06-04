
import session from "express-session";
import { loginUser, registerUser } from "../services/user.service.js";


export const signup = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await registerUser(username, password);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error signin up",
            error: error.message,
        })
    }
}



export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await loginUser(username, password)

        // Save user ID in session
        req.session.userId = user._id;
        res.status(200).json({
            success: true,
            message: "Login successfull"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error Logging in",
            error: error.message,
        })
    }
}
export const logout = (req, res) => {
   
};