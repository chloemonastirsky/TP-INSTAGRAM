import React, { useState } from 'react'
import type { DogPost } from '../types/Post'
import './Post.css'

type PostProps = {
  post: DogPost
  username?: string
  location?: string
  timeAgo?: string
  initialLikes?: number
  caption?: string
  onSelectPost: (post: DogPost) => void // 🔥 Requisito obligatorio para el modal
}

const Post: React.FC<PostProps> = ({
  post,
  username = 'firulaichuwis_ok',
  location = 'Buenos Aires',
  timeAgo = 'hace 2 horas',
  initialLikes = 1240,
  caption = 'Mirando a la nada, pensando en todo... ¿Habrá sobre de carne hoy? 🐶🐾',
  onSelectPost,
}) => {
  
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)

  const handleLike = () => {
    setLiked(prev => !prev)
    setLikes(prev => prev + (liked ? -1 : 1))
  }

  return (
    <article className="post-card">
      {/* Encabezado del Post */}
      <header className="post-header">
        <div className="post-header-left">
          <div className="avatar">
            {/* Ojo: Si 'post.url' es gigante, en el avatar la achicamos por CSS */}
            <img src={post.url} alt={`Avatar de ${username}`} className="avatar-img" />
          </div>
          <div className="user-info">
            <p className="username">{username}</p>
            <p className="location">{location}</p>
          </div>
        </div>
        <button className="more-options-btn" aria-label="Más opciones">•••</button>
      </header>

      {/* Imagen del Post - Al hacer click abre el Modal */}
      <div className="post-image-container" onClick={() => onSelectPost(post)}>
        <img
          className="post-image"
          src={post.url}
          alt={`Imagen de ${username}`}
        />
      </div>

      {/* Acciones (Interacciones) */}
      <div className="post-content-area">
        <div className="post-actions">
          <div className="left-actions">
            <button
              onClick={handleLike}
              className={`action-btn like-btn ${liked ? 'liked' : ''}`}
              aria-label={liked ? 'Quitar me gusta' : 'Me gusta'}
            >
              {liked ? '❤️' : '🤍'}
            </button>
            <button className="action-btn" aria-label="Comentar" onClick={() => onSelectPost(post)}>
              💬
            </button>
            <button className="action-btn" aria-label="Compartir">
              📤
            </button>
          </div>
          <button className="action-btn bookmark-btn" aria-label="Guardar">🔖</button>
        </div>

        {/* Información del Post */}
        <p className="likes"><strong>{likes.toLocaleString('es-AR')} me gusta</strong></p>
        
        <p className="caption">
          <strong className="caption-username">{username}</strong> {caption}
        </p>
        
        <button className="view-comments-btn" onClick={() => onSelectPost(post)}>
          Ver los comentarios
        </button>
        
        <p className="time">{timeAgo.toUpperCase()}</p>
      </div>
    </article>
  )
}

export default Post