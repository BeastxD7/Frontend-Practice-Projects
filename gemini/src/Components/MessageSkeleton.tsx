import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-full flex mb-3 gap-3 justify-start">
      {/* Gemini Profile Icon Placeholder */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 animate-pulse"></div>

      {/* Skeleton Chat Bubble */}
      <div className="relative overflow-hidden bg-slate-700 py-3 px-4 w-[60%] max-w-[75%] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
        {/* Shimmer Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

        {/* Placeholder Text Lines */}
        <div className="h-4 bg-gray-400/40 rounded w-[85%] mb-2"></div>
        <div className="h-4 bg-gray-400/40 rounded w-[60%]"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
