import React from 'react'
import {Link} from "react-router-dom"

const Account = () => {
  return (
    <div className='bg-zinc-800 w-full flex justify-center'>
      <Link className='px-10 py-4 border-2 rounded-md mt-5' to="/Account/signup1">Sign Up</Link>
      <Link className='px-10 py-4 border-2 rounded-md mt-5' to="/Account/signin1">Sign In</Link>

    </div>
  )
}

export default Account
