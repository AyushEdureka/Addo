const express = require('express')
const  {MongoClient}   = require('mongodb')

const app = express()
const port = 3300

//Step 1 : Connect with Database: Local Database

const MongoURL = 'mongodb://localhost:27017';

//Step 2 :

MongoClient.connect(MongoURL)

.then(client => {
 console.log('Connected To MongoDb')

 const db = client.db('Addo_xyz')
 const collection = db.collection('TestCollection')

 //Insert
 collection.insertOne({name:"Sample",type:"Testing"})
 .then(()=>{
    console.log('Sample Document Inserted')

    app.listen(port,()=>{
        console.log('Server running')
    })
 })

 .catch(err=>console.error('Insert failed',err))

})

.catch(err=>console.error('MongoDB Connection failed',err))