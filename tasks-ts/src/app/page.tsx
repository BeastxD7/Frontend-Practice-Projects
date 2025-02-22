"use client";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/Components/Loader";

const Page = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // Detects if navigation is in progress

  const handleTask1 = () => {
    startTransition(() => {
      router.push("/blogs");
    });
  };

  const handleTask2 = () => {
    startTransition(() => {
      router.push("/profile");
    });
  };

  const handleTask3 = () => {
    startTransition(() => {
      router.push("/todo");
    });
  };

  const handleTask4 = () => {
    startTransition(() => {
      router.push("/products");
    });
  };

  return (
    <div className="bg-black h-screen w-screen gap-6 flex flex-col justify-center items-center text-white font-semibold">
      <h1 className="text-2xl">Tasks</h1>
      <div
        onClick={handleTask1}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer flex justify-center items-center min-w-[100px] min-h-[40px]"
      >
        {isPending ? <Loader /> : "Task 1"}
      </div>

      <div
        onClick={handleTask2}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        {isPending ? <Loader /> : "Task 2"}
      </div>

      <div
        onClick={handleTask3}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        {isPending ? <Loader /> : "Task 3"}
      </div>

      <div
        onClick={handleTask4}
        className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer"
      >
        {isPending ? <Loader /> : "Task 4"}
      </div>
    </div>
  );
};

export default Page;
