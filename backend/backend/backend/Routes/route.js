const {signupValidation, loginValidation} =require('../Middlewares/middleware')
const {signup,login}=require('../Controllers/controller')
const router =require('express').Router();

router.post('/login',loginValidation,login)

router.post('/signUp', signupValidation,signup)


router.get('/getting',(req,res)=>{
    res.send("i am getting")
})
module.exports= router;