const mongoose=require('mongoose');
// const Schema=mongoose.Schema;
const MySchema=new mongoose.Schema({
    name:{
        type:String,
       // required:true
    },
    gender:{
        type:String,
        //required:true
    },
    email:{
        type:String,
        //required:true
    },
    number:{
        type:Number,
        //required:true
    },
    category:{
        type:String,
        //required:true
    },
    skills:{
        type:String,
        //required:true
    },
    img:{
        type:String,
        //required:true
    }

})


module.exports=mongoose.model('NewCollection',MySchema);

// const mongoose=require('mongoose');
// const menSchema =new mongoose.Schema({
//     ranking:{
//         type:Number,
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     dob:{
//         type:String,
//     },
//     event:{
//         type:String,

//     }
// })

// const MensRanking=new mongoose.model('newMenRanking',menSchema);

//module.exports=MensRanking
