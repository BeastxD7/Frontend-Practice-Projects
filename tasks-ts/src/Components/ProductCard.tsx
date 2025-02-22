import Image from 'next/image'
import React from 'react'

interface IProductCard {
  title: string,
  description: string,
  price: number,
  category: string,
  thumbnail: string
}

const ProductCard = ({ title, description, price, category, thumbnail }: IProductCard) => {
  // Function to truncate text to 77 characters
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className='bg-slate-800/90 p-5 w-60 h-96 rounded-lg overflow-hidden'>
      <Image className='object-cover h-[60%] border border-gray-600 shadow-2xl rounded-lg' src={thumbnail} alt='product' width={500} height={500} />
      
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
