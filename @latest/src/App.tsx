import { useState, useEffect } from 'react'
import {fetchPosts} from '../api.js'
import type { DogPost } from './components/Post/Post.js'
import Post from './components/Post/Post.js'


function App() {
  const [posts, setPosts] = useState<DogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     fetchPosts(5)
       .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando perritos...</p>

  return (
    <main>
      {posts.map(post => (
        <Post key={post.id} post={post} initialLikes={Math.floor(Math.random() * 2000)} />
      ))}
    </main>
  )
}