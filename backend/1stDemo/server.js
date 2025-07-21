// //STEP 1 : IMPORT ALL THE MODULES WHICH YOU REUIRE IN YOUR BACKEND STEP UP THE BACKEND
// const http = require('http');  //Http is internal module no need of installation

// //CREATE WEB SERVER/KICTHEN

// http.createServer((request,response)=>{

//     response.write("Hello Addo Wassup Your Pizza Is Ready")

//     response.end()

// }).listen(3000);   //STEP 3: START THE SERVER

// console.log("Server running at http://localhost:3000")

// //LAST STEP - RUN THE BACKEND FILE  : node Filename.js

//Example-2
//OS module 

const os = require('os')

console.log("CPU SPECIFACTION " + os.arch())
console.log("Free mem " + os.freemem())
console.log("Total Mem " + os.totalmem())
