"use client"
import React from 'react'
import { SendHorizontal } from 'lucide-react';
const name = "Sumuchan"
const page = () => {

  return (
    <div className='bg-gradient-to-t from-slate-950 to-slate-800 w-screen h-screen text-white flex flex-col justify-center items-center'>
      {/* Main Heading */}
      <div className=''>
        <h1 className='text-3xl font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>Hello, {name}</h1>
      </div>
      {/* Message Box */}
      <div className='fixed w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] bottom-6 md:bottom-12 flex pr-3 pl-6 justify-between items-center h-16  border rounded-full border-slate-600'>
        <input  placeholder='Ask Gemini...' className='bg-transparent  h-full outline-none w-[80%] ' type="text" />
        <button className='bg-slate-800/50 hover:bg-slate-800/100 p-2 rounded-full'><SendHorizontal /></button>
      </div>
    </div>
  )
}

export default page