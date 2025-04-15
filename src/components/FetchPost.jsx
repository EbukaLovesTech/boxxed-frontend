

export default async function Posts(params) {

    const API_URL = "http://localhost:5000/api/boxxeds";
    let posts = [];
    
    try {
      const response = await fetch(API_URL);
      posts = await response.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }

  return (
    <ul>
    {posts.data.map(post => (
      <li key={post.id}>
        <a href={`/post/${post.attributes.slug}`}>{post.attributes.title}</a>
      </li>
    ))}
  </ul>
  );
}
