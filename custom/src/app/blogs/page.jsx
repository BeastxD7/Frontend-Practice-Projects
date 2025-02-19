
import { parseMarkdown } from '../utils/parseMarkdown';
import { fetchBlogs } from '../utils/fetchBlogs';
import Card from '@/Components/Card';

export default async function BlogsPage() {
  // Fetch blog posts server-side
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Blog Posts
        </h1>
        <p className="text-blue-300 text-center mb-12">
          Explore our latest articles and insights
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id}
              username={blog.username}
              title={blog.title}
              content={parseMarkdown(blog.content)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}