const express=require('express');
const bodyParser=require('body-parser')
const dotenv=require('dotenv').config();
const cors=require('cors')

const {mongoose}=require('./db');


const app=express();

app.use(bodyParser.json());
app.use(cors());


// app.use(express.json());

// app.use('/allUsers',require('./routes/userRoutes'));

const userRoutes=require('./routes/userRoutes')

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})

app.use('/users',userRoutes);