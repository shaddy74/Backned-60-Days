import { Server } from "socket.io"
import http from "http"
import express from "express"

const app = express();


const server = http.createServer(app);

const io = new server(server);

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("disconnected", () => {
        console.log("User disconnected", socket.id)
    })
})


export { app, server, io };