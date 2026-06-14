import { useState } from 'react'
import type { ModalProps } from '../types/Modal'
import './Modal.css'

// Comentarios simulados para mostrar en el modal
const COMENTARIOS = [
  { id: 1, usuario: 'firulais.ok', texto: 'Qué hermoso perrito! 😍' },
  { id: 2, usuario: 'laika_oficial', texto: 'Me encanta esta foto 🐾' },
  { id: 3, usuario: 'max.perrito', texto: 'Qué ternura enorme 🥺' },
  { id: 4, usuario: 'doggo_lover', texto: 'Me robó el corazón ❤️' },
  { id: 5, usuario: 'perruno.22', texto: 'El mejor contenido de toda la app 👏' },
]

const Modal = ({ post, onCerrar }: ModalProps) => {

  const [likeado, setLikeado] = useState(false)
  const [cantLikes, setCantLikes] = useState(1420)
  const [comentarioNuevo, setComentarioNuevo] = useState('')

  if (!post) return null

  const handleLike = () => {
    setCantLikes(prev => likeado ? prev - 1 : prev + 1)
    setLikeado(prev => !prev)
  }

  return (
    // Fondo oscuro semitransparente — al hacer click afuera cierra el modal
    <div className="modal-fondo" onClick={onCerrar}>

      {/* Contenido del modal — el onClick.stopPropagation() evita que se cierre al hacer click adentro */}
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>

        {/* Imagen grande a la izquierda */}
        <img src={post.url} alt="Publicación ampliada" className="modal-imagen" />

        {/* Panel derecho con info del post */}
        <div className="modal-panel">

          {/* Cabecera con avatar y usuario */}
          <div className="modal-header">
            <img src={post.url} alt="avatar" className="modal-avatar" />
            <div>
              <p className="modal-username">dog_lover_2026</p>
              <p className="modal-ubicacion">Buenos Aires, Argentina</p>
            </div>
            <button className="modal-cerrar-top" onClick={onCerrar}>✕</button>
          </div>

          <hr className="modal-divisor" />

          {/* Lista de comentarios */}
          <div className="modal-comentarios">
            {/* Descripción / caption */}
            <div className="comentario-item">
              <img src={post.url} alt="avatar" className="comentario-avatar" />
              <p className="comentario-texto">
                <strong>dog_lover_2026</strong> Explorando el mundo, un ladrido a la vez 🐾 #perros #amor
              </p>
            </div>

            {/* Comentarios simulados */}
            {COMENTARIOS.map((c) => (
              <div key={c.id} className="comentario-item">
                <div className="comentario-avatar-placeholder" />
                <p className="comentario-texto">
                  <strong>{c.usuario}</strong> {c.texto}
                </p>
              </div>
            ))}
          </div>

          <hr className="modal-divisor" />

          {/* Botones de acción */}
          <div className="modal-acciones">
            <div className="modal-acciones-izq">
              <button onClick={handleLike} className="accion-modal-btn" aria-label="Me gusta">
                <svg width="24" height="24" viewBox="0 0 24 24" fill={likeado ? '#ed4956' : 'none'} stroke={likeado ? '#ed4956' : 'currentColor'} strokeWidth={2}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              <button className="accion-modal-btn" aria-label="Comentar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              <button className="accion-modal-btn" aria-label="Compartir">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <button className="accion-modal-btn" aria-label="Guardar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polygon points="19 21 12 16 5 21 5 3 19 3 19 21" />
              </svg>
            </button>
          </div>

          {/* Contador de likes */}
          <p className="modal-likes"><strong>{cantLikes.toLocaleString('es-AR')} me gusta</strong></p>
          <p className="modal-fecha">HACE 2 HORAS</p>

          <hr className="modal-divisor" />

          {/* Input para agregar comentario */}
          <div className="modal-input-comentario">
            <input
              type="text"
              placeholder="Añade un comentario..."
              value={comentarioNuevo}
              onChange={(e) => setComentarioNuevo(e.target.value)}
              className="modal-input"
            />
            <button
              className="modal-publicar-btn"
              disabled={comentarioNuevo.trim() === ''}
              onClick={() => setComentarioNuevo('')}
            >
              Publicar
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modal