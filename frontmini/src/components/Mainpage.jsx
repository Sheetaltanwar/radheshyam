import React from 'react'
import { Link } from 'react-router-dom'
const Mainpage = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
      <div><h1>Welcome To Country Compass</h1><br/><br/></div>
      <div style={{display:'flex',gap:'20px'}}>
     <Link to={'/login'}><button style={{height:'50px',width:'100px' }} >Login</button></Link> 
      <Link to={'/signup'}> <button style={{height:'50px',width:'100px' }}>Signup</button></Link>
      </div>
    </div>
  )
}

export default Mainpage