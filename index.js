const fs = require('fs')

let data = "this text will write to file.txt"

fs.writeFile("file.txt", data, (err)=>{
    if(err)
    console.log(err.message)
    else console.log('file written successfully')
})