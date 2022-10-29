const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken.js');
const userSchema = require('../models/users.js');


router.login = async(req,res) => {
  const { email, password } = req.body
  const user = await userSchema.findOne({ email })

  try{
  if (user && (await user.matchPassword(password))) {
    res.json({
      userId: user._id,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }}
  catch (err){
    res.send(err);
  }
}


router.register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    try{
        let user = new userSchema({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            isAdmin: req.body.isAdmin
        })
        user = await user.save();
    
        if(!user)
            return res.status(400).send('The user cannot be created')
        res.send(user);
    }catch(err){
        console.log(err)
    }
}


router.getUsers = async (req, res) => {
  const users = await userSchema.find().select('-password');
  res.json(users)
}

router.getUserById = async(req,res) => {
  try{
      const user = await userSchema.findById(req.params.id).select('-password');
      if(!user){
          res.status(500).json({message:'Given id not exist'});
      }
      res.status(200).send(user);
  }catch(err){
      res.send(err)
  }
}

//Admin can see only some fields
router.getusername = async(req,res) => {
  try{
      const userList = await userSchema.find().select('username email');
      if(!userList){
          res.status(500).json({success: false})
      }
      res.send(userList);
  }catch(err){
      res.send(err);
  }
}

router.remove = async (req,res) => {
  try{
      userSchema.findByIdAndRemove(req.params.id)
      .then(user=>{
          if(user){
              return res.status(200).json('User deleted')
          }else{
              return res.status(404).json({success:false, message:'User not found'})
          }
      }).catch(err=>{
          return res.status(400).json({success:false, error:err});
      })
  }catch(err){
      res.send(err);
  }
}


module.exports = router;