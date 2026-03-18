import React from 'react'
import { useLocation } from "react-router-dom";

const home = () => {
  const location = useLocation();
  const { success, message } = location.state || {};
  
  let Success_Failure="user is not loggedIn yet."
  if(message!==""){

    return <div className="absolute float-top text-center text-center w-full flex justify-center">
        <div className="text-center bg-blue-500  rounded-[1px] ">
        
          {success? <h1 className='text-white px-5 py-3 text-2xl'>Login successfully</h1>: <h1 className='text-white text-2xl'></h1> }

        </div>
   
      </div>
    
  } 

  return (
    <div>
      {Success_Failure}
    <h1>Home</h1>
    </div>
  )

}

export default home
