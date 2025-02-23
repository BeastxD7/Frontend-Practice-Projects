"use client";

import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import ProductCard from "@/Components/ProductCard";

interface IProductCard {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

const Page = () => {
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductCard[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition(); // 🟢 useTransition

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: IProductCard[] }>(
          "https://dummyjson.com/products"
        );
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        setCategories([
          "All",
          ...new Set(response.data.products.map((product) => product.category)),
        ]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    startTransition(() => {
      if (category === "All") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) => product.category === category)
        );
      }
    });
  };

  return (
    <div className="bg-black text-white min-h-screen w-[90%] m-auto flex flex-col py-10">
      {/* Category Filter Buttons */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div
          className={
            loading
              ? "hidden "
              : "flex overflow-x-auto gap-4 py-3 px-4 bg-gray-800 rounded-lg md:flex-wrap md:justify-center"
          }>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                selectedCategory === category
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="w-full gap-8 flex flex-wrap justify-center py-8">
        {loading || isPending ? (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <h1>Loading...</h1>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="text-gray-400">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
