const express=require('express');
const bodyParser=require('body-parser')
const dotenv=require('dotenv').config();
const cors=require('cors')
const multer=require('multer');

const {mongoose}=require('./db');


const app=express();

app.use(bodyParser.json());
app.use(cors());





// app.use(express.json());

// app.use('/allUsers',require('./routes/userRoutes'));

const userRoutes=require('./routes/userRoutes')

const port=process.env.PORT || 3000



const DIR='./public/uploads/'
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,DIR)
    },
    filename:(req,file,cb)=>{
        const filename=file.originalname.toLowerCase();
        cb(null,filename)
    },
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false)
      return cb(new Error("only .jpeg,.png,.jpg files are allowed"))
    }
  };

  



app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})

app.use('/users',userRoutes);