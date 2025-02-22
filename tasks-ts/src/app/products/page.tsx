import React from 'react'
import axios from 'axios'
import ProductCard from '@/Components/ProductCard';

interface IProductCard {
  id:number
  title:string,
  description:string,
  price:number,
  category:string,
  thumbnail:string
}

const fetchProducts = async () => {
  const response = await axios.get<{ products: IProductCard[] }>("https://dummyjson.com/products");
  console.log("API Response:", response.data);
  return response.data.products;  
};

const Page = async () => {


const products: IProductCard[] = await fetchProducts()
const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className='bg-black text-white min-h-screen  w-[90%] m-auto flex flex-col py-10 '>
      {/* Header Section with Categories */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center'>
        <div className='flex overflow-x-auto gap-4 py-3 px-4 bg-gray-800 rounded-lg md:flex-wrap md:justify-center'>
          {categories.map((category, index) => (
            <button key={index} className='bg-gray-700 hover:cursor-pointer px-4 py-2 text-sm rounded-lg hover:bg-gray-600 transition'>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='w-full s-full  gap-8 flex flex-wrap justify-center py-8'>
          {products&&products.map((product:IProductCard) => {
            return <ProductCard key={product.id} title={product.title}  description={product.description}   price={product.price}   category={product.category}  thumbnail={product.thumbnail}  />
          })}
      </div>
    </div>
  )
}

export default Page