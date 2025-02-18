import React from 'react'

const Card = (props: {title:string}) => {
  return (
    <div className='cursor-pointer bg-gradient-to-r from-fuchsia-600 to-purple-600 py-3 px-6 rounded-md text-white font-semibold'>{props.title}</div>
  )
}

export default Card