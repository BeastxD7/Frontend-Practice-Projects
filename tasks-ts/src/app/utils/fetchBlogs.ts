export async function fetchBlogs() {
  const response = await fetch("https://tasksbybeast.vercel.app/api/blogs");

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  
  return response.json();
}
