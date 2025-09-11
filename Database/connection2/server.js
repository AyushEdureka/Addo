const express =  require('express')
const mongoose = require('mongoose')

const app = express()

//Middleware :
app.use(express.json())

//Step 1 : Connect To MomgoDb Dtabase

mongoose.connect("mongodb://localhost:27017/CafeCoffeeDay")

.then(()=>console.log("Mongob Connected Successfull"))

.catch(err=>console.error("Connection failed",err))

//2.Define Schema / Blueprint of data which want me to store

const studentSchema  =    new  mongoose.Schema({
            name:String,
            phone:Number,
            email:String
          })

//3. Model/Collection
    
const Student =    mongoose.model("Students",studentSchema)


// --------------------- DATABASE SETUP
// -------------------- Route/Url - USe methods


app.post("/add-student",async(req,res)=>{

 const newStudent  =  new  Student(req.body)
 await newStudent.save();
 res.send("Student Added Successfully")
})


//Get the students
app.get("/customer-list",async(req,res)=>{

  const students  =  await  Student.find() 
  res.json(students)

})

app.listen(3300,()=>console.log("Server running"))