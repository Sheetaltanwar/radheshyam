const ensureAuthenticated = require('../Middlewares/Auth');

const ProductRouter=require('express').Router();

ProductRouter.get('/',ensureAuthenticated,(req,res)=>{
    console.log('====loggedin ==',req.user)
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        }
        ,
        {
            name:"tv",
            price:20000
        }
    ])
})

module.exports=ProductRouter