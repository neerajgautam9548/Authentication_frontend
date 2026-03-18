import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { API_URL } from '../constants/url';



const signup = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate=useNavigate();


    async function formSubmit(e) {
        e.preventDefault();
        console.log("form submitted");
        let user={
            email:email,
            password:password,
        }
        console.log(user);
        const response = await axios.post(`${API_URL}/users/signup`,user,{
            headers:{
                "Content-Type":"application/json"
            }
            
        })
        navigate("/signin");
        console.log(response.data);
    }

    function newEmail(e){
        setEmail(e);
    }
    function newPassword(e){
        setPassword(e);
    }
    
    return (
        <div className='w-full min-h-screen flex justify-center align-center '>
            <div className='flex flex-col justify-center items-center align-center p-5'>
                <h1 className='text-2xl mb-5'>Create An Account</h1>
                <form onSubmit={(e) => { formSubmit(e) }} className='flex flex-col border-2 rounded-md  px-5 py-10' action="">
                    <label className='p-3  mr-2' htmlFor="">Eamil:

                        <input onChange={(e)=>newEmail(e.target.value)} className='ml-11 p-2 rounded-md border-2' type="email" name="email" placeholder='Enter your Email...' />
                    </label>
                    <label className='p-3 mt-2 mr-2' htmlFor="">Password:

                        <input onChange={(e)=>newPassword(e.target.value)} className='ml-4 p-2 rounded-md border-2' type="password" name="email" placeholder='Enter your Email...' />
                    </label>
                    <label className='w-full' htmlFor="">

                        <input className='ml-10  rounded-md cursor-pointer px-4 py-2 mt-2 text-xl bg-blue-500  text-center' type="submit" value="Create an Account" />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default signup
