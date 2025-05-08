const parkModel=require('../models/model');
const router=require ('express').Router();

router.get('/getpark',async(req,res)=>{
    const parkdata=await parkModel.find({});
    console.log("parkdata has come",parkdata)
    res.send({result:parkdata})
    
})

router.get('/getparkId/:id',async(req,res)=>{
  const id=req.params.id;
  const object=await parkModel.findOne({_id:id})
  console.log("object is ",object)
  res.send({result:object})
})
module.exports=router;