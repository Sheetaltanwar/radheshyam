// what to install
// mongoose, express, dotenv, joi, jsonwebtoken, bcrypt, cors
// app.use(express.json()) bhai jrur dallle .........  isse hi kuch data post ho skta h mongo me vrna nhi


// //  get me or deleted me async await use krna jruri hota h 

// const  express=require('express')
// const mongoose=require('mongoose')
// const cors=require('cors')
// const EmployeeModel=require('./models/employee')

// require('dotenv').config();

// let app=express();
// app.use(express.json())

// app.post('/posting',(req,res)=>{

//     let {name,email}=req.body;
//     let enquiry=new EmployeeModel({
//         name:name,
//         email:email
//     })
//     enquiry.save().then(()=>{
//         res.send({status:1,message:"enquiry saved successfully"})
//     }).catch((err)=>{
//         res.send({status:0,message:"error while saving enquiry ",error:err})
//     });
//     res.send("data saved")
// })

// app.get('/getting',async(req,res)=>{
//      let  enquiryList= await EmployeeModel.find();
//      console.log(enquiryList)
//     res.send({status:1,message:'enquirylist',data:enquiryList})
// })

// app.delete('/deleting/:id',async(req,res)=>{
//     const enquiryId=req.params.id;
//     const DeletedEnquiry= await EmployeeModel.deleteOne({_id:enquiryId})
//     res.send('deleted')
// })

// app.put('/updating/:id',async(req,res)=>{
//     const enquiryId=req.params.id;
//     let {name,email}=req.body;
//     const obj={
//         name:name,
//         email:email
//     }
//     let updateRes= await EmployeeModel.updateOne({_id:enquiryId},obj)
//     res.send('updated')
// })

// mongoose.connect(process.env.dbUrl).then(()=>{
//     console.log("connected to mongodb")
//     app.listen(process.env.PORT,()=>{
//         console.log("server is running on pot", process.env.port )
//     })
// })

const cors=require('cors')
const bodyParser=require('body-parser')
const express=require('express')
const mongoose=require('mongoose')
const AuthRouter=require('./Routes/route')
const ProductRouter = require('./Routes/productRouter')
require('dotenv').config();


const app=express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/auth',AuthRouter)
app.use('/products',ProductRouter)

mongoose.connect(process.env.dbUrl).then(()=>{
    console.log("it is connected to mongodb Port",process.env.PORT)
    app.listen(process.env.PORT)
})
