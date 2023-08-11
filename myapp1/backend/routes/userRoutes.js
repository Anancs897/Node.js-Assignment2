const express=require('express');
const router=express.Router();

//const {User}=require('./models/user')

const MySchema=require('../model/userModel');



//get all users
router.get('/allUsers', (req, res) => {
  MySchema.find({}).then((data)=>{
    res.status(200).json(data)
  })
  .catch((err)=>{
    res.status(500).json({message: err})
  })
});

//create new user
  
router.post('/createNew', (req, res) => {
  console.log(req.body);
  const {name,gender,email,number,category,skills,img} = req.body;

  const newUser = new MySchema({
      name: name,
      gender: gender,
      email: email,
      number: number,
      catgeory: category,
      skills:skills,
      img: img
  });

  newUser.save().then(()=>{
    res.status(201).json({message:"New user created"})
  }).catch((err)=>{
    res.status(500).json({ message: err })
  })
});


//get aparticular user

router.get('/allUsers/:id',(req,res)=>{
  const id = req.params.id;
    MySchema.findById({ _id: id })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
})


//update user
router.patch('/update/:id',(req,res)=>{
  const id = req.params.id;
  const {name,gender,email,number,category,skills,img} = req.body;

    MySchema.findByIdAndUpdate({ _id: id }, {
      name: name,
      gender: gender,
      email: email,
      number: number,
      catgeory: category,
      skills:skills,
      img: img
    })

        .then(() => {
            res.status(200).json({ message: "User updated successfully" })
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
})

router.delete('/delete/:id',(req,res)=>{
  const id = req.params.id;
  MySchema.findByIdAndDelete(id)
      .then(() => {
          res.status(200).json({ message: "User deleted successfully" })
      })
      .catch((err) => {
          res.status(500).json({ message: err })
      })
})




  module.exports = router;