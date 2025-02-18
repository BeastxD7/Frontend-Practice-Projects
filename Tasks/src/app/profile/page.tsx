import React, { Suspense } from "react";
import UserProfileWrapper from "./UserProfileWrapper";
import SkeletonLoader from "@/components/SkeletonLoader";

const Page = () => {
  return (
    <div className="w-screen h-fit min-h-screen flex flex-col justify-start py-10 items-center gap-5 bg-gradient-to-t from-zinc-800 to-zinc-900">
      <Suspense fallback={<SkeletonLoader />}>
        <UserProfileWrapper />
      </Suspense>
    </div>
  );
};

export default Page;
