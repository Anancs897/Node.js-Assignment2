const mongoose=require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err);
})


module.exports=mongoose;