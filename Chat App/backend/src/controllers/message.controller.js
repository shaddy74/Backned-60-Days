import User from "../models/user.model.js";
import Message from "../models/message.model.js"

import cloudinary from "../lib/cloudinary.js";


export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filterUsers)
    } catch (error) {
        console.log("Error in getUserForSidebar", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}


export const getMassage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const myId = req.user._id;

        const message = await Message.find({
            $or: [
                { senderId: myId, recieverId: userToChatId },
                { senderId: userToChatId, recieverId: myId },
            ]
        })
        res.status(200).json(message)
    } catch (error) {
        console.log("Error in getUserForSidebar", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}
export const sendMassage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: recieverId } = req.params;

        const senderId = req.user._id;

        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMassage = new Message({
            senderId,
            recieverId,
            text,
            image: imageUrl
        })
        await newMassage.save();

        // TODO: IMPLEMENT SOCKET IO TO SEND MESSAGE TO RECEIVER FOR REALTIME CHAT

        res.status(200).json(newMassage)
    } catch (error) {
        console.log("Error in getUserForSidebar", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}

