
import React, { useEffect } from 'react'
import '../components/WildLife.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


 const WildLife = () => {
    const navigate=useNavigate();
    let [data1,setData1]=useState([]);
    let [radhadata,setradhadata]=useState([{}])

    useEffect(()=>
      {console.log("data1 is in 2 ",data1)}
  ,[data1])


    useEffect(()=>{
     axios.get('http://localhost:4004/auth/getpark').then((res)=>{
        console.log("data has come",res.data.result)
        setData1(res.data.result)
        console.log("content is",data1)

     })
    },[])

   const handleClick=(id)=>{
      navigate(`/park/${id}`)
   }
    
  return (
    <>
   

<div style={{display:'flex',width:'1800px',height:'50px', backgroundColor:' #262a77',justifyContent:'space-between',alignItems:'center',paddingRight:'50px',paddingLeft:'50px' ,position:'relative',top:'70px',left:'-7px'}}>
       <div style={{width:'200px',margin:'33px'}}> <h2 style={{textAlign:'left',color:'white'}}>WildLife</h2></div>
      <div style={{width:'500px',marginRight:'67px'}}>  <h2 style={{textAlign:'right',fontWeight:'200',color:'white'}}>Top Top National Parks In India</h2></div>
    </div>
    
    
    
    <div style={{width:'100vw',height:'900px',position:'relative',top:'68px'}}>
      {data1.map((item,index)=>(
        <div className='listComponents' onClick={()=>handleClick(item._id)} key={item.id}>
            <div style={{width:"50px"}}><h2>{index+1}.</h2></div>
            <div style={{width:'400px'}}> <h2 style={{color:'rgb(8, 8, 51);'}}>{item.state}</h2></div>
            <div style={{width:'400px'}} ><h2 style={{fontWeight:'300',color:'rgb(8, 8, 51);'}}>{item.name}</h2></div>
            <img style={{height:'80px',width:'80px'}} src={item.image1}/>
        </div>
      ))}
    </div>
    </>
  )
}
export default WildLife;