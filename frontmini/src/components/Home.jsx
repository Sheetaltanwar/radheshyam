
import React from 'react'
import SingleImageCarousel from './ImageCarousel'
import Carousel from './Imagesection'
import VideoClip from './video'
import Navbar from './Navbar'
const Home = () => {
  return (
   <>
   <Navbar/>
   <VideoClip/>
   <div style={{width:'100vw',height:'600px',position:'relative',top:'-50px'}}><br/>
   <h1 style={{textAlign:'center'}}>Top 10 Places In India To Visit </h1><br/>
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', width:'100vw',height:'600px',backgroundImage:`linear-gradient(rgba(255,255,255,0.5)),url('https://t4.ftcdn.net/jpg/07/85/74/19/240_F_785741930_ud3J6msjbY2bSlCAMnAzg18Tl7ltQGD9.jpg')` , backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
     <SingleImageCarousel/>
     </div>
  </div>
  <div style={{ height:"110px",width:'100vw',display:'flex',flexDirection:'column',justifyContent:'flex-end',textAlign:'center'}}><h1 style={{marginTop:'9px',marginBottom:'9px'}}>Places to  Visit </h1></div>
   
 
   <Carousel/>
  
   </>
  )
}

export default Home



