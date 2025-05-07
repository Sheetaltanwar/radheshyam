import images from './object'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Topcities = () => {
  
   const navigate=useNavigate()
   useEffect(()=>{
    console.log("images",images)
   },[])

   const handleClick=async(id)=>{   
    const object1=images.filter((item)=>item.id==id)
    navigate(`/individual/${id}`,{state:{item:object1}})
    console.log("object 1 is ",object1)
}

  return (
    <div>
      <div>
        
        <div style={{display:'flex',width:'1400px',height:'50px', backgroundColor:' #262a77',justifyContent:'space-between',alignItems:'center',paddingRight:'50px',paddingLeft:'50px' ,position:'relative',top:'70px',left:'-7px'}}>
       <div style={{width:'200px',margin:'33px'}}> <h2 style={{textAlign:'center' ,color:'white'}}>Economic Hubs</h2></div>
      <div style={{width:'500px',marginRight:'67px'}}>  <h2 style={{textAlign:'right',fontWeight:'200',color:'white'}}>Top Cities In India</h2></div>
    </div>
    <div style={{width:'100vw',height:'875px',position:'relative',top:'68px'}}>
      {images.map((item,index)=>(
        <div className='listComponents' onClick={()=>handleClick(index)} key={item.id}>
            <div style={{width:"50px"}}><h2>{index+1}.</h2></div>
            <div style={{width:'400px'}}> <h2 style={{color:'rgb(8, 8, 51);'}}>{item.state}</h2></div>
            <div style={{width:'400px'}} ><h2 style={{fontWeight:'300',color:'rgb(8, 8, 51);'}}>{item.name}</h2></div>
            <img style={{height:'80px',width:'80px'}} src={item.image}/>
        </div>
      ))}
    </div>
    </div>




    </div>

  )
}

export default Topcities