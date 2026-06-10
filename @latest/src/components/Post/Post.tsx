import React, { useState } from 'react'
import type { DogPost } from '../types/Post'
import './Post.css'

type PostProps = {
  post: DogPost
  username?: string
  location?: string
  timeAgo?: string
  initialLikes?: number
}

const Post: React.FC<PostProps> = ({
  post,
  username = 'dog_lover_2026',
  location = 'Buenos Aires',
  timeAgo = 'hace 2 horas',
  initialLikes = 0,
   }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)

  const handleLike = () => {
    setLiked(prev => !prev)
    setLikes(prev => prev + (liked ? -1 : 1))
  }


   return (
    <article className="post-card">
      <header className="post-header">
        <div className="post-header-left">
          <div className="avatar">
            <img src={post.url} alt={`Avatar de ${username}`} />
          </div>
          <div>
            <p className="username">{username}</p>
            <p className="location">{location}</p>
          </div>
        </div>
        <button aria-label="Más opciones">···</button>
      </header>

      <img
        className="post-image"
        src={post.url}
      />

      <div className="post-actions">
        <button
          onClick={handleLike}
          className={`like-btn ${liked ? 'liked' : ''}`}
          aria-label={liked ? 'Quitar me gusta' : 'Me gusta'}
        >
          {liked ? '❤️' : '🤍'}
        </button>
        <button aria-label="Comentar">💬</button>
        <button aria-label="Compartir">📤</button>
      </div>

      <p className="likes"><strong>{likes.toLocaleString('es-AR')} me gusta</strong></p>
      <p className="caption">
        <strong>{username}</strong> 
      </p>
      <p className="time">{timeAgo}</p>
    </article>
  )
}

export default Post