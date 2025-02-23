"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();


  const handleTask = async ( path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-black h-screen w-screen gap-6 flex flex-col justify-center items-center text-white font-semibold">
      <h1 className="text-2xl">Tasks</h1>

      <div
        onClick={() => handleTask( "/blogs")}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer "
      >
        Task 1
      </div>

      <div
        onClick={() => handleTask( "/profile")}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        Task 2
      </div>

      <div
        onClick={() => handleTask( "/todo")}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        Task 3
      </div>

      <div
        onClick={() => handleTask( "/products")}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        Task 4
      </div>

      <div
        onClick={() => handleTask( "/cache")}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        Task 5
      </div>
    </div>
  );
};

export default Page;
