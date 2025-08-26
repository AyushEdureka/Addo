//Step 1: Import Module

const express =   require('express')

const app = express() // Create Express Application

//DEFINE A ROUTE/PATH / URL and Give You Response

//4 METHOD WE ALONG ALONG WITH EXPRESS AND PATH
// - Get   : Get the data from Backend
// - Post  : Send The Data To Backend
// - Put   : Update the Existing Data
// - Delete : Delete The Data Enitrely

app.get('/login' , (req,res)=>{
   // res.send('Fill the Details')
    res.send(`<h1>Hii ADDOO</h1>`)
})

//START THE SERVER : Express
app.listen(3300,()=>{
    console.log("Server Running")
})
