import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { handleError,handleSuccess } from "./utils";
import axios from 'axios'

export const SignUp = () => {
   const [signupInfo,setsignInfo]=useState({
       name:'',
       email:'',
       password:''
     })
     const navigate=useNavigate()
   
   
     const handleChange = (event) => {
        const {name, value}= event.target;
        console.log('name',name,'value',value)
        const copyLoginInfo={...signupInfo}
        copyLoginInfo[name]=value;
        setsignInfo(copyLoginInfo);
     };
    //  console.log('loginInfo',loginInfo)
   
     const handleSignUp=async(e)=>{
       e.preventDefault();
       const {name,email,password}=signupInfo;
       if(!name || !email || !password)
       {
           // return handleError('name,email and password are required ')
            toast.error('name,email and password are required ',{
                   positon:'top-right'
               })
       }
       try{
           console.log("i am in try")
           const url='http://localhost:8016/auth/signUp'
           axios.post(url,signupInfo).then(()=>{
             handleSuccess('signupp successfully')
             setTimeout(()=>{
               navigate('/login')
             },1000)
           })
   
       }catch(err){
         handleError(err)
       }
     }
     
  return (
    <>
       <div style={{display:'flex',width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center'}}>
         <div className='container'>
          <ToastContainer/>
         <h1 className='heading' >Sign Up</h1>
         <form onSubmit={handleSignUp}>
         <div style={{display:'flex',flexDirection:'column'}}>
             <label htmlFor="name">Name</label>
             <input 
             style={{height:'30px'}}
             type="text" 
             onChange={handleChange} 
             name="name"
             placeholder="Enter your name"
             ></input>
           </div>
            
           <div style={{display:'flex',flexDirection:'column'}}>
             <label htmlFor="name">Email</label>
             <input 
             style={{height:'30px'}}
             type="email" 
             onChange={handleChange} 
             name="email"
             placeholder="Enter your email"
             ></input>
   
           </div>
           <div style={{display:'flex',flexDirection:'column'}}>
           <label htmlFor="password">Password</label>
             <input 
             style={{height:'30px'}}
             type="password" 
             onChange={handleChange} 
             name="password"
             placeholder="Enter your password"
             ></input>
           </div>
           <div className="btncontainer">
           <button style={{height:'30px',backgroundColor:'purple',color:'white',borderRadius:'5px'}}type='submit' onClick={handleSignUp}>Sign Up</button>
   
           <span>Already have an account<Link to ='/login'>  <span>login</span></Link></span>
           </div>
         </form>
         </div>
         </div>
       </>
  )
}

