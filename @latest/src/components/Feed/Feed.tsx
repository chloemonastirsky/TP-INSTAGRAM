import type { FeedProps } from '../types/Feed'
import Post from '../Post/Post'
import './Feed.css'

const Feed = ({ posts, onVerDetalle }: FeedProps) => {

  if (posts.length === 0) {
    return <p className="feed-vacio">No hay publicaciones todavía.</p>
  }

  return (
    <main className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} onVerDetalle={onVerDetalle} />
      ))}
    </main>
  )
}

export default Feed