//STEP 1 : IMPORT ALL THE MODULES WHICH YOU REQUIRE IN BACKEND STEP UP
//http : Build In Module : No Installation

const http =  require('http')// Imported 

//STEP2: Creat Server 
http.createServer((req,res)=>{

res.write('Hello From Addo-Server')

res.end()

}).listen(3000);  // STEP 3 STARTING The SERVER

console.log("Server Running at http://localhost:3000")


//Run - node filename.js  (Terminal)