

const UserModel =require('../models/Signup')
const jwt=require('jsonwebtoken')
require('dotenv').config();
const bcrypt= require('bcrypt')
const signup=async(req,res)=>{
    try{
      const{name,email,password}=req.body;
      console.log(req.body)
      const user=await UserModel.findOne({email})
      if(user){
        return res.status(409).json(
            {
                message:'user is already exist, you can login ',success: false
            }
        );
      }
      const userModel=new UserModel({name,email,password})
      userModel.password=await bcrypt.hash(password,10)
      await userModel.save()
      res.send("signed up successfully")
        
    }
    catch(err){
        res.send("signed having error")
    }
    // res.send("signuping")
}

const login=async(req,res)=>{
   
const {email,password}=req.body;
const user=await UserModel.findOne({email});
const errorMessage="auth failed email or password is wrong"

if(!user){
    res.send("user email is not signed up")
}
const isPassEqual= await bcrypt.compare(password,user.password);
// const isPassEqual=user.password;
if(!isPassEqual)
{
    res.send("password is not equal")
}
const jwtToke=jwt.sign(
    {email:user.email,_id:user._id},
    process.env.JWT_SECRET,
    {
        expiresIn:'24h'
    }
)
res.status(200)
.json({message:"login success",
       success:true,
       jwtToke,
       email,
       name:user.name
},
)
}





module.exports={signup,login}