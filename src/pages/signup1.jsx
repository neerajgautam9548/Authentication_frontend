import React, { useState } from 'react'
import axios from 'axios';
import { API_URL } from '../constants/url';
const signup1 = () => {
    
    const [email,setEmail] = useState("");
   

    const sentOtp = async (e) => {
        e.preventDefault();
        console.log("yes");

        const res = await axios.post(`${API_URL}/reqOTP`,{
        email
        });

        alert(res.data.message);
    }

    function newEmail(e){
        // console.log(import.meta.env.VITE_API_URL);
        setEmail(e);
    }

    return (
        <div className='w-full min-h-screen flex justify-center align-center '>
            <div className='flex flex-col justify-center items-center align-center p-5'>
                <h1 className='text-2xl mb-5'>Create An Account</h1>
                <form onSubmit={(e) => { sentOtp(e) }} method="post" className='flex flex-col border-2 rounded-md  px-5 py-10'>
                    <label className='p-3  mr-2' htmlFor="">Email:

                        <input onChange={(e)=>newEmail(e.target.value)} className='ml-3 px-6 py-3 rounded-md border-2' type="email" name="email" placeholder='Enter your Email...' />
                    </label>
                    
                    <label className='w-full flex justify-center' htmlFor="">

                        <input className='rounded-md cursor-pointer px-4 py-2 mt-2 text-xl bg-blue-500  text-center' type="submit" value="Send OTP" />
                    </label>
                </form>
            </div>
        </div>
  )
}

export default signup1
