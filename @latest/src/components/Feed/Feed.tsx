import type { FeedProps } from "../types/Feed";
import Post from "../Post/Post";
import React from 'react'

const Feed: React.FC<FeedProps> = ({ posts }) => {
    if (posts.length === 0) {
    return <p className="feed-empty">No hay publicaciones todavía.</p>
  }

  return (
    <main className="feed-container">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}   
          initialLikes={Math.floor(Math.random() * 2000)}
        />
      ))}
    </main>
  );
}

export default Feed;