import { useState } from 'react'
import type { PostProps } from '../types/Post'
import './Post.css'

// Comentarios simulados que se van a mostrar en el modal
const COMENTARIOS_MOCK = [
  'Qué lindo! 😍',
  'Me encanta esta foto 🐾',
  'Hermoso perrito!',
  'Qué ternura 🥺',
]

// Usernames y ubicaciones de muestra
const USUARIOS = ['firulais.ok', 'doggo_lover', 'max.perrito', 'perruno.22', 'laika_oficial']
const UBICACIONES = ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata']

const Post = ({ post, onVerDetalle }: PostProps) => {

  const [likeado, setLikeado] = useState(false)
  const [cantLikes, setCantLikes] = useState(Math.floor(Math.random() * 2000) + 100)
  const [guardado, setGuardado] = useState(false)

  // Datos simulados basados en el id del post para que sean consistentes
  const indice = parseInt(post.id.replace(/\D/g, '').slice(0, 3) || '0', 10) % USUARIOS.length
  const usuario = USUARIOS[indice]
  const ubicacion = UBICACIONES[indice]

  const handleLike = () => {
    setCantLikes(prev => likeado ? prev - 1 : prev + 1)
    setLikeado(prev => !prev)
  }

  return (
    <article className="post">

      {/* Cabecera: avatar + usuario + ubicación + "..." */}
      <div className="post-header">
        <img src={post.url} alt="avatar" className="post-avatar" />
        <div className="post-usuario-info">
          <p className="post-username">{usuario}</p>
          <p className="post-ubicacion">{ubicacion}</p>
        </div>
        <button className="post-mas">•••</button>
      </div>

      {/* Foto principal — al hacer click abre el modal */}
      <img
        src={post.url}
        alt="Publicación"
        className="post-foto"
        onClick={() => onVerDetalle(post)}
      />

      {/* Botones de acciones */}
      <div className="post-acciones">
        <div className="post-acciones-izq">
          {/* Corazón */}
          <button onClick={handleLike} className="accion-btn" aria-label="Me gusta">
            <svg width="24" height="24" viewBox="0 0 24 24" fill={likeado ? '#ed4956' : 'none'} stroke={likeado ? '#ed4956' : 'currentColor'} strokeWidth={2}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Comentario */}
          <button onClick={() => onVerDetalle(post)} className="accion-btn" aria-label="Comentar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Compartir */}
          <button className="accion-btn" aria-label="Compartir">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        {/* Guardar */}
        <button onClick={() => setGuardado(prev => !prev)} className="accion-btn" aria-label="Guardar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill={guardado ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
            <polygon points="19 21 12 16 5 21 5 3 19 3 19 21" />
          </svg>
        </button>
      </div>

      {/* Likes y caption */}
      <div className="post-info">
        <p className="post-likes"><strong>{cantLikes.toLocaleString('es-AR')} me gusta</strong></p>
        <p className="post-caption">
          <strong>{usuario}</strong> Explorando el mundo, un ladrido a la vez 🐾
        </p>
        <button className="post-ver-comentarios" onClick={() => onVerDetalle(post)}>
          Ver los {COMENTARIOS_MOCK.length} comentarios
        </button>
        <p className="post-tiempo">HACE 2 HORAS</p>
      </div>

    </article>
  )
}

export default Post