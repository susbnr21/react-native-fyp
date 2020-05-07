const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const User = mongoose.model('User');
const Truck = mongoose.model('Truck');

router.post('/truck', async (req,res)=>{

  const {name,contact,address_from,address_to,truck_size,
        description,weight,truck_space,capacity_furniture,capacity_box,worker,boxes,extra} = req.body;
  try{
    const truck = new Truck({name,contact,address_from,address_to,truck_size,
    description,weight,truck_space,capacity_furniture,capacity_box,worker,boxes,extra});
    await truck.save();
    const token = jwt.sign({truckId:truck._id},jwtkey)
    res.send({token})

  }
  catch(err){
    res.status(422).send(err.message)
  }
})

router.post('/signup',async (req,res)=>{
   
    const {name,email,password} = req.body;

    try{
      const user = new User({name,email,password});
      await user.save();
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
      await user.comparePassword(password);    
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
    


})


module.exports = router