const http = require('http')
const fs = require('fs')
const {Transform, pipeline} = require('stream');
const { error } = require('console');
const PORT = 3000;

const server = http.createServer((req, res) => {


    // 1 Downloading file in a bad way❌

    // const file = fs.readFileSync("sample.txt")

    // res.end(file)


    // 2 Downloading file in a good way (stream)✅

    // const readableStream = fs.createReadStream('sample.txt')
    // readableStream.pipe(res)
    // res.end()


    // 1 Copy file in a bad way❌

    // const file = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt", file)
    // res.end()


    // 2 Copy file in a good way (stream)✅

    // const readStream = fs.createReadStream("sample.txt");
    // const writeStream = fs.createWriteStream("output.txt");

    // readStream.on("data", (chunk) => {
    //     console.log(`CHUNK: ${chunk}`)
    //     writeStream.write(chunk);
    // })



    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Shadab"); 
            callback(null, modifiedWord)
        }
    })

    // !Bad Approach ❌
    // readStream.on("data", (chunk) => {
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Shadab");
    //     writeStream.write(modifiedWord)
    // })
    // res.end();

    // Good Approach✅
    // readStream.pipe(transformStream).pipe()
    pipeline(readStream, transformStream, pipeline, (err)=>{
        console.log(err)
    })
    res.end()
})

server.listen(PORT, () => {
    console.log("Server is Running", PORT)
})


// stream -----> writeable AND readable
// readable <-----pipe-----> writeable
// req = readable stream hota hai
// res = writeable stream hota hai