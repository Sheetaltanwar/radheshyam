import React from "react";
import { useState } from "react";
import './Login.css';
import { handleError,handleSuccess } from "./utils";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import axios from 'axios'
export const Login = () => {
  const [loginInfo,setLoginInfo]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate()


  const handleChange = (event) => {
     const {name, value}= event.target;
     console.log('name',name,'value',value)
     const copyLoginInfo={...loginInfo}
     copyLoginInfo[name]=value;
     setLoginInfo(copyLoginInfo);
  };
  console.log('loginInfo',loginInfo)

  const handleLogin=async(e)=>{
    e.preventDefault();
    const {email,password}=loginInfo;
    if(!email || !password)
    {
        // return handleError('name,email and password are required ')
         toast.error('name,email and password are required ',{
                positon:'top-right'
            })
    }
    try{
        console.log("i am in try")
        const url='http://localhost:8015/auth/login'
        axios.post(url,loginInfo).then((response)=>{
          console.log("response is ",response)
          const response1=response.data
          const {success,message,jwtToke,name,error}=response1;

          handleSuccess('login successfully')
          localStorage.setItem('token',jwtToke)
          localStorage.setItem('loggedInUser',name)
          setTimeout(()=>{
            navigate('/home')
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
      <h1 className='heading' >Login</h1>
      <form onSubmit={handleLogin}>
        
         
        <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor="name">Email</label>
          <input 
          style={{height:'30px'}}
          type="email" 
          onChange={handleChange} 
          name="email"
          placeholder="Enter your email"
          value={loginInfo.email}
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
          value={loginInfo.password}
          ></input>
        </div>
        <div className="btncontainer">
        <button style={{height:'30px',backgroundColor:'purple',color:'white',borderRadius:'5px'}} onClick={handleLogin} type='submit'>Login</button>

        <span>don't have account <Link to ='/signup'>SignUp</Link></span>
        </div>
      </form>
      </div>
      </div>
    </>
  );
};
