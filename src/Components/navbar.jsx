import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const navbar = () => {
  var navigate=useNavigate();
  function back(e){
    e.preventDefault();
    navigate(-1);
  }
  function next(e){
    e.preventDefault();
    navigate(+1);
  }
  

  return (
    <div className='bg-blue-500 h-[10%] py-5 w-full flex justify-center align-center'>
        <p className='w-full ml-10 text-xl'>Gaming With Neeraj</p>
        <div className='flex flex items-end justify-end gap-7 w-full mr-10'>
        <button onClick={(e)=>{back(e)}} className='px-5 py-2 rounded-md bg-amber-400 '>back</button>
        <button onClick={(e)=>{next(e)}} className='px-5 py-2 rounded-md bg-amber-400 '>Next</button>
        

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/Account">Login Account</Link>

        
        
        <div>
            
        <Link className=' border-2 p-2 rounded-md' to="/signup">Sign Up</Link>
        </div>
        
        </div>
    </div>
  )
}

export default navbar
