import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { API_URL } from '../constants/url';


const signin1 = () => {
  
  const [otp,setOtp] = useState("");
  const [email,setEmail]=useState("");
  const navigate=useNavigate();
  const verifyOtp = async (e) => {
      e.preventDefault();
      const res = await axios.post(`${API_URL}/verifyOTP`,{
        email,
        otp
      });
      console.log(res.data);

      navigate("/",{
        state:res.data
      });

      alert(res.data.message);
    }
    function Password(e){
      console.log(e);
      setOtp(e);
    }
    function newEmail(e){
        setEmail(e);
    }
    return (
    <div className='w-full min-h-screen flex justify-center align-center '>

            <div className='flex flex-col justify-center items-center align-center p-5'>
              <h1 className='text-2xl mb-5'>Verify your Account</h1>
            <form onSubmit={(e)=>{verifyOtp(e)}} action="/verifyOTP" method='post' className='flex flex-col border-2 rounded-md  px-5 py-10' >
                <label className='p-3  mr-2' htmlFor="">Email:

                        <input onChange={(e)=>newEmail(e.target.value)} className='ml-3 px-6 py-3 rounded-md border-2' type="email" name="email" placeholder='Enter your Email...' />
                    </label>
                <label className='p-3 mt-2 mr-2' htmlFor="">Password:

                <input onChange={(e)=>{Password(e.target.value)}} className=' p-2 rounded-md border-2' type="password" name="email" placeholder='Enter your OTP' />
                </label>
                <label className='w-full flex justify-center' htmlFor="">

                        <input className='  rounded-md cursor-pointer px-4 py-2 mt-2 text-xl bg-blue-500  text-center' type="submit" value="Verify OTP" />
                    </label>
            </form>
            </div>
        </div>
  )
}

export default signin1
