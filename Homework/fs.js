const fs = require("fs");

fs.readFile("./text.txt", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data.toString())
    }
})


fs.writeFile("./text.txt", "Dodavanje na text so writeFile", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Data has been written.")
    }
})

fs.writev