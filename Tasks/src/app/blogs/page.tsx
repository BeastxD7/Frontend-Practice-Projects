import Card from '@/components/Card';
import { fetchBlogs } from './FetchBlogs';

interface IBlogs {
  userId:number,
  id:number,
  title:string,
  body:string
}

const Page = async () => {
  const blogs: IBlogs[] = await fetchBlogs() as IBlogs[];

  return (
    <div className='w-screen h-fit min-h-screen flex flex-col justify-start py-10 items-center gap-5 bg-gradient-to-t from-zinc-800 to-zinc-900'>
      <h1 className='bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent font-semibold text-3xl'>Fetched Blogs</h1>
      <div className='flex w-fit h-full gap-3 flex-col'>
        {blogs.map((blog: { title: string }, index: React.Key | null | undefined) => {
          return <Card key={index} title={blog.title} />;
        })}
      </div>
    </div>
  );
};

export default Page;
