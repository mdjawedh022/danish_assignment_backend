const express = require('express');
const cors=require('cors');
const connection = require('./utils/db');
const { FormRouter } = require('./routes/form.routes');
require('dotenv').config();

const app = express();

app.get('/',(req, res)=>{
res.send("Welcome to Backend")
})

app.use(cors());

app.use(express.json());

app.use("/form",FormRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection;
     console.log("connection established");
    }catch(err){
        console.log(err)
    }
    console.log(`server listening on port ${process.env.port}`)
})