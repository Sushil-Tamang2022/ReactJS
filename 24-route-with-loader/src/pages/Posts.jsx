import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
  return (
    <div>
      <h1>Post</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
            <li key={post.id}>{post.title} - {post.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
