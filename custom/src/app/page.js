"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {

  const router = useRouter()

  function handleBlog () {
    router.push("/blogs")
  }

  return (
    <div className='h-screen w-screen bg-black text-white flex justify-center items-center font-semibold'>
      <h1 onClick={handleBlog} className='bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer'>Go to Blogs</h1>
    </div>
  )
}

export default page