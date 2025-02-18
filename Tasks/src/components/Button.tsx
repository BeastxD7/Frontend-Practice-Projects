"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface IProps {
  title:string,
  route:string
}

const Button = ({title , route}:IProps) => {

    const router = useRouter()

    const handleJoinBlog = () => {
        router.push(`${route}`)
    }

  return (
    <div onClick={handleJoinBlog} className='bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 px-4 rounded-md text-white font-semibold cursor-pointer hover:shadow-[0_20px_50px_rgba(134,_22,_222,_0.7)] transition-shadow duration-500'>{title}</div>
  )
}

export default Button