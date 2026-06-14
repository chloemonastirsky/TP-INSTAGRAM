import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <span className="header-logo" onClick={() => navigate('/')}>
          Instagram
        </span>

        {/* Buscador */}
        <div className="header-buscador">
          <input type="text" placeholder="Buscar" className="input-buscar" />
        </div>

        {/* Íconos de navegación */}
        <nav className="header-nav">
          <button className="nav-btn" onClick={() => navigate('/')} aria-label="Inicio">
            {/* Ícono casa */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>

          <button className="nav-btn" aria-label="Explorar">
            {/* Ícono brújula */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          </button>

          <button className="nav-btn" aria-label="Crear publicación">
            {/* Ícono + cuadrado */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>

          <button className="nav-btn" aria-label="Notificaciones">
            {/* Ícono corazón */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Avatar / Perfil */}
          <button className="nav-btn avatar-btn" onClick={() => navigate('/perfil')} aria-label="Perfil">
            <img
              src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg"
              alt="Mi perfil"
              className="header-avatar"
            />
          </button>
        </nav>

      </div>
    </header>
  )
}

export default Header