
const http = require('http');
const fs = require('fs');

const PORT = 3000;

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: & From ${req.url} new Request Received\n`

    fs.appendFile("log.txt", log, (err,) => {
        if (err) {
            console.error(`Error writing to the log file ${err}`)
            res.statusCode = 500;
            res.end("Internal Server Error")
            return;
        }

        res.end("Hello world I'm From Server")
    })

})

myServer.listen(PORT, () => {
    console.log(`The server runing is this ${PORT}`)
})