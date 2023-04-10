import { Link, useLoaderData } from 'react-router-dom';

export const Blog = () => {

  const { posts } = useLoaderData();
  console.log(posts)

  return (
    <ul>
        {posts.length > 0 ? (
            posts.map((blog) => (
                <li key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>{blog.id} {blog.title}</Link>
                </li>
            ))
        ) : (
            <li>No blogs found</li>
        )}
    </ul>
);
};

export const loaderBlog = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();

  // console.log(posts)

  return{posts};

}
