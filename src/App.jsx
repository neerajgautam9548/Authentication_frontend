import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import SignUp_Login from "./Components/Account";
import SignUp1 from "./pages/signup1"
import SignIn1 from "./pages/signin1"
// import dotenv from "dotenv";
// dotenv.config();
function App() {
  return (
    <div className='bg-zinc-800 text-white min-h-screen w-full'>
      <Navbar />
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Account" element={<SignUp_Login />} />
          <Route path="/Account/signup1" element={<SignUp1 />} />
          <Route path="/Account/signin1" element={<SignIn1 />} />
        </Routes>

    </div>
  )
}

export default App