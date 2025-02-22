import UserProfileSkeleton from "@/Components/UserProfileSkeleton"


const Page = async() => {

  return (
    <div className='bg-black px-4 text-white h-screen w-screen flex justify-center items-center'>
        <UserProfileSkeleton/>
    </div>
  )
}

export default Page