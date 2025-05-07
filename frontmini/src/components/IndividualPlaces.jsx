
import React from 'react'
import { useLocation,useParams } from 'react-router-dom'
import { useEffect } from 'react';
const IndividualPlaces = () => {
  
  const {state}=useLocation();
  let {item}=state 
  item=item[0]
  console.log("item state is ",item)
  return (
    <>
    
    <div style={{width:'100vw',border:'1px solid black',marginTop:'71px'}}>
     <div style={{display:'flex',width:'100vw',height:'50%'}}>
        <div style={{padding:'80px',width:'50vw' ,height:'300px'}}>
             <h1 style={{fontSize:'40px'}}>{item.state}</h1>
             <h2 style={{fontWeight:'400'}}>{item.name}</h2>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50vw',paddingTop:'80px'}}>
         <img style={{width:'500px',height:'300px'}} src={item.image}></img>
        </div>
     </div>


     <div style={{display:'flex'}} >
        <div style={{padding:'80px',width:'50vw'}}>
            <h2>Description</h2> <br/>
            <p style={{fontSize:'20px'}}>{item.des}</p>
        </div>
        <div style={{width:'50vw',padding:'30px',display:'flex',alignItems:'center',flexDirection:'column'}}>
             <h2>Map</h2><br/>  
             <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(item.name)}&output=embed`}
            width="500px"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Dynamic Map"
          ></iframe>
        </div>
       
     </div>
    </div>
    </>
  )
}

export default IndividualPlaces