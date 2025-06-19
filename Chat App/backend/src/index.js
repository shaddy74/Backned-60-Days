import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";               // <-- Add this
import { Server } from "socket.io";    // <-- Add this

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app); // <-- Use HTTP server with express

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // React URL
    credentials: true,
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ⚡️ Socket.IO Handling
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("sendMessage", (data) => {
    console.log("Received message:", data);
    io.emit("newMessage", data); // Broadcast message to all clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});


// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// import { connectDB } from "./lib/db.js";
// import authRoutes from "./routes/auth.routes.js"
// import messageRoutes from "./routes/message.routes.js"




// dotenv.config();

// const PORT = process.env.PORT || 3000

// const app = express()
// app.use(express.json())
// app.use(cookieParser())
// app.use(
//     cors({
//         origin: ["http://localhost:5173"],
//         credentials: true
//     })
// )


// // Routes
// app.use("/api/auth/",authRoutes)

// app.use("/api/messages",messageRoutes)


// app.listen(PORT, () => {
//     console.log(server is running on port ${PORT})
//     connectDB();
// })