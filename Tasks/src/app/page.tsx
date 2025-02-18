import React from 'react'
import Button from '@/components/Button'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-zinc-800 to-zinc-900'>
      <h1 className='bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent font-semibold text-3xl'>Tasks</h1>
      <Button title='Task 1' route='/blogs'/>
      <Button title='Task 2' route='/profile'/>
    </div>
  )
}

export default page