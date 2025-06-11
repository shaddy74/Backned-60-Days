import express from "express"
import http from "http"
import dotenv from "dotenv"
import WebSocket, { WebSocketServer } from "ws";


dotenv.config();

const PORT = process.env.PORT || 3000


const server = http.createServer((req, res) => {
    console.log(new Date() + "Recieved req for" + req.url);
    req.end("Hi there");
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
    ws.on("error", console.error);

    ws.on("message", function message(data, isBinary) {

        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary })
            }
        })

    });

    ws.send("Hello connection message from ws server")
});



server.listen(PORT, () => {
    console.log((new Date()) + ` server is running on port ${PORT}`)
})