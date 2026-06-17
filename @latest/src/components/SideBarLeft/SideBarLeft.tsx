import { useNavigate } from 'react-router-dom'
import './SideBarLeft.css'

const SideBarLeft = () => {
  const navigate = useNavigate()

  return (
    <aside className="sidebar-left">

      {/* Logo */}
      <span className="sidebar-logo" onClick={() => navigate('/')}>
        Instagram
      </span>

      <nav className="sidebar-nav">

        {/* Home */}
        <button className="sidebar-item" onClick={() => navigate('/')} aria-label="Inicio">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="sidebar-texto">Home</span>
        </button>

        {/* Search */}
        <button className="sidebar-item" aria-label="Buscar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="sidebar-texto">Search</span>
        </button>

        {/* Explore */}
        <button className="sidebar-item" aria-label="Explorar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
          <span className="sidebar-texto">Explore</span>
        </button>

        {/* Reels — sin funcionalidad, solo visual */}
        <button className="sidebar-item" aria-label="Reels">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="3" width="20" height="18" rx="4" />
            <path d="M7 3 10 8" />
            <path d="M14 3 17 8" />
            <line x1="2" y1="8" x2="22" y2="8" />
          </svg>
          <span className="sidebar-texto">Reels</span>
        </button>

        {/* Messages — sin funcionalidad, solo visual */}
        <button className="sidebar-item" aria-label="Mensajes">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="sidebar-texto">Messages</span>
        </button>

        {/* Notifications */}
        <button className="sidebar-item" aria-label="Notificaciones">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="sidebar-texto">Notifications</span>
        </button>

        {/* Create */}
        <button className="sidebar-item" aria-label="Crear publicación">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          <span className="sidebar-texto">Create</span>
        </button>

        {/* Profile */}
        <button className="sidebar-item" onClick={() => navigate('/perfil')} aria-label="Perfil">
          <img
            src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg"
            alt="Mi perfil"
            className="sidebar-avatar"
          />
          <span className="sidebar-texto">Profile</span>
        </button>

      </nav>

      {/* More — sin funcionalidad, solo visual */}
      <button className="sidebar-item sidebar-mas" aria-label="Más opciones">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <span className="sidebar-texto">More</span>
      </button>

    </aside>
  )
}

export default SideBarLeft