"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface IProductCard {
  title: string,
  description: string,
  price: number,
  category: string,
  thumbnail: string
}

const ProductCard = ({ title, description, price, category, thumbnail }: IProductCard) => {
  const [loading, setLoading] = useState(true);

  // Function to truncate text to 77 characters
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className='bg-slate-800/90 p-5 w-60 h-96 rounded-lg overflow-hidden'>
      <div className="relative h-[60%] border border-gray-600 shadow-2xl rounded-lg overflow-hidden">
        {loading && <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>}
        <Image
          className={`object-cover w-full h-full rounded-lg transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          src={thumbnail}
          alt="product"
          width={500}
          height={500}
          onLoad={() => setLoading(false)}
          loading="lazy"
        />
      </div>

      <div className='flex justify-between pt-2 gap-4 items-center'>
        <h1 className='font-semibold text-sm'>{title}</h1>
        <h1 className='text-sm bg-blue-300/50 p-1 rounded-md'>${price}</h1>
      </div>

      <h1 className='text-xs text-gray-400 pt-3'>{truncateText(description, 69)}</h1>

      <div className='flex justify-between pt-4 items-center'>
        <div>
          <h1 className='text-xs bg-gray-400/50 py-1 px-2  rounded-lg'>{category}</h1>
        </div>
        <button className='bg-blue-600 py-1 px-3 font-semibold rounded-md hover:cursor-pointer'>View</button>
      </div>
    </div>
  );
}

export default ProductCard;
