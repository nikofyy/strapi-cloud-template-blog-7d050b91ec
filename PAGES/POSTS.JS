export async function getStaticProps() {
    const res = await fetch('https://eloquent-oasis-90bf00d625.strapiapp.com/api/posts');
    const data = await res.json();
    return { props: { posts: data.data } };
  }
  
  export default function Posts({ posts }) {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.attributes.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  