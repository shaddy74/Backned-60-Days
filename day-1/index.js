const { error } = require('console')
const fs = require('fs')

//* Write

// fs.writeFileSync("./text.txt", "Hey world this is sync Writing");

// fs.writeFile("./test.txt", "Hey world this is sync Writing", (err) => {
//     console.log(err);
// });


//* Read
    // const res = fs.readFileSync('./text.txt', "utf-8")
    // console.log(res)

    // fs.writeFile('./test.txt', "utf-8" , (err, res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(res)
    //     }
    // })


//* Update / append

    // fs.appendFileSync("./text.txt", new Date().toDateString())

    // fs.appendFile("./log.txt", `Hello world this is shaddy and logged in at ${new Date().toDateString()}\n`, (err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(res);
    //     }
    // })

    