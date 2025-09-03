const express = require('express')
const cors = require('cors')

const PORT = 3000

const app = express()

//STEP 1:set up the middlewareas cors and json to pass the data
app.use(cors())

app.use(express.json())

app.post('/login', (req,res)=>{

    const {name,email,password} = req.body;

    console.log('User resgistered ' , {name,email})

    //
    res.json({message:`Welcome ${name} Your Account has been resgitered`})
})

app.listen(PORT,()=>{
    console.log('Server is ruuning')
})