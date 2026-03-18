import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { API_URL } from '../constants/url';

const signin = () => {
  const location = useLocation();
  const { success, message } = location.state || {};
  console.log(success,message);
  
  const [useEmail,setEmail] = useState("");
  const [usePassword,setPassword]=useState("");
  const navigate=useNavigate();

  function Email(e){
   // e.preventDefault();
    setEmail(e)
  }

  function Password(e){
  //  e.preventDefault();
    setPassword(e)
  }

  async function formSubmit(e){
    console.log("chal raha hai");
    e.preventDefault();
    let user={
      email:useEmail,
      password:usePassword,
    }
    
      const response=await axios.post(`${API_URL}/users/signin`,user,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      let success=response.data.success;
      let message=response.data.message;

      if(success===true){
         navigate("/", {
          state: {
            success: true,
            message: message
          }
        });
      }
      else{
        navigate("/signin", {
          state: {
            success: false,
            message: message
          }
        });
      }
     
  }  

  return (
    <div className='w-full min-h-screen flex justify-center align-center '>

            <div className='flex flex-col justify-center items-center align-center p-5'>
              <h1 className='text-2xl mb-5'>Login your Account</h1>
            <form onSubmit={(e)=>{formSubmit(e)}} className='flex flex-col border-2 rounded-md  px-5 py-10' action="">
                <label className='p-3  mr-2' htmlFor="">Eamil: 

                <input onChange={(e)=>{Email(e.target.value)}} className='ml-11 p-2 rounded-md border-2' type="email" name="email" placeholder='Enter your Email...' />
                </label>
                <label className='p-3 mt-2 mr-2' htmlFor="">Password: 

                <input onChange={(e)=>{Password(e.target.value)}} className='ml-4 p-2 rounded-md border-2' type="password" name="email" placeholder='Enter your Email...' />
                </label>
                <label className='w-full' htmlFor="">

                <input className='ml-10  rounded-md cursor-pointer px-4 py-2 mt-2 text-xl bg-blue-500  text-center' type="submit" value="Create an Account" />
                </label>
            </form>
            </div>
        </div>
  )
}

export default signin
