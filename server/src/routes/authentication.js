const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../model/user")


router.post("/login", async(req, res)=>{
  try{
    const user = await User.findOne(req.body)
    // console.log(user)
    if(!user){
      return res.json({
        status: false,
        message: "Wrong Username or Password!",
        data: null
      })
    }
    const token = jwt.sign({id: user._id.toString()},  process.env.JWT_SECRET)
    const newUser = {
      username : user.username,
      token: token
    } 
    return res.json({
      status: true,
      message: "Login successfull!",
      data: newUser
    })
  }catch(err){
    return res.json({
      status: false,
      message: err.message,
      data: null
    })
  }
})

module.exports = router