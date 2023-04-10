import React from 'react'
import { useLoaderData } from 'react-router-dom';

export const Post = () => {

const {post} = useLoaderData();


  return (
    <div>
        <h1>
            {post.id} - {post.title}
        </h1>
        <p>{post.body}</p>
    </div>
);
};

export const loaderPost = async ({ params }) => {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (!data.ok)
        throw {
            status: data.status,
            statusText: "No Encontrado ",
        };
    const post = await data.json();
    return { post };
};
