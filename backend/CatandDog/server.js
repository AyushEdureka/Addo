const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 3300

//API
// const CAT_API = 'https://api.thecatapi.com/v1/images/search'
// const DOG_API = 'https://dog.ceo/api/breeds/image/random'

//SHOW THE RANDOM CAT AND DOG IMAGE

app.get('/cat-vs-dog', async (req,res)=>{

    try{
       
        const catResponse = await axios.get(CAT_API)
        const dogResponse = await axios.get(DOG_API)

        res.send(
            `
         <h1>Cat vs Dog</h1>
         <img src="${catResponse.data[0].url}" style="width:300px"; height:300px"> 
         <img src="${dogResponse.data.message}" style="width:300px"; height:300px">  
         <br>
         <button onClick="window.location.reload()">Reset</button> 
            `
        )

    }catch(err){
        //Internal Server code - 500
        res.status(500).send('Error Loadingf Image')
    }
})


app.listen(PORT,()=>{
    console.log('server running at http://localhost:3300')
})