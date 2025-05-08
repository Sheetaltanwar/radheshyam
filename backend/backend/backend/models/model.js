
const mongoose=require('mongoose')

const modelSchema= new mongoose.Schema({
    name:{
        type:String
    },
    des:{
        type:String
    },
    
    image1:{
        type:String
    },
    image2:{
        type:String
    }
})

let parkModel=mongoose.model('images',modelSchema) 
module.exports=parkModel;