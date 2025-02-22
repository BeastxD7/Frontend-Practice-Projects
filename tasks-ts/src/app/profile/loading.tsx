import UserProfileSkeleton from '@/Components/UserProfileSkeleton'
import axios from 'axios'
export const dynamic = "force-dynamic";

interface IUserProfile {
    name:string,
    email:string,
    bio:string,
    website:string,
    avatar:string
}

const getProfileInfo = async ()=> {
  const response = await axios.get<IUserProfile>("https://tasksbybeast.vercel.app/api/profile");
  return response.data
}

const Page = async() => {

  const userInfo:IUserProfile = await getProfileInfo() 
  console.log(userInfo);
  

  return (
    <div className='bg-black px-4 text-white h-screen w-screen flex justify-center items-center'>
        <UserProfileSkeleton/>
    </div>
  )
}

export default Page