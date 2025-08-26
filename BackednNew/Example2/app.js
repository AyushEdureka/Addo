const express = require('express')

const app = express()


//Middleware
app.use(express.json())

const pet = {name:"Byte", mood:"😴", hunger:5, fun:5}
const clamp = n=> Math.max(0,Math.min(10,n));  //Keep the Values between 0- 10


//Methods And URL
app.get("/" , (req,res)=>{
    res.send("Welcome To Byte The Virtual Pet! Try /status , /Feed , /play , /nap");
})

//1.See The current
app.get("/status", (req,res)=> res.json(pet))


app.post("/feed",(req,res)=>{
    pet.hunger = clamp(pet.hunger - 2);
    pet.mood = "😋"
    res.json({...pet , message : "Nom nom Byte is happeri and less hungry "})
})



app.post("/play",(req,res)=>{
    pet.fun = clamp(pet.fun + 2);
    pet.hunger = clamp(pet.hunger - 1)
    pet.mood = "🤩"
    res.json({...pet , message : "Yepppie Byte had fun and Bit hungry "})
})

app.post("/nap",(req,res)=>{
    pet.mood = "😴"
    res.json({...pet , message:"ZZZZ Byte is Sleeping"})
})


app.listen(4000,()=>{
    console.log("Server running")
})





