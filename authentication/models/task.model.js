import mongoose, { mongo } from "mongoose";

const taskSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
}, { timestamps: true })

const Task = mongoose.model("Task", taskSchema)

export default Task;