export async function fetchBlogs() {
  const response = await fetch("https://tasksbybeast.vercel.app/api/blogs", {
    cache: "no-store", // Ensures it fetches fresh data every time
    next: { revalidate: 0 }, // Forces dynamic fetching in App Router
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  
  return response.json();
}
