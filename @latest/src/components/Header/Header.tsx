import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import type { HeaderProps } from '../types/Header'

const Header = ({
  avatarUrl,
  onProfileClick,
  onCreateClick,
  onHomeClick,
  onExploreClick,
  onNotificationsClick,
  onMessagesClick,
  hasNotification = false,
}: HeaderProps) => {
    
  const navigate = useNavigate()

  return (
    <header className="ig-header">
      <div className="ig-header-inner">

        <span className="ig-logo">Instagram</span>
    
        <div className="ig-search">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            placeholder="Buscar"
            aria-label="Buscar en Instagram"
          />
        </div>

        <nav className="ig-nav" aria-label="Navegación principal">
          <button aria-label="Inicio">🏠</button>
          <button aria-label="Mensajes directos">💬</button>
          {/* <button aria-label="Crear publicación">➕</button>
          <button aria-label="Explorar">🧭</button>
          <button aria-label="Notificaciones">🤍</button> */}
          <button
            className="avatar-btn"
            aria-label="Ver perfil"
            onClick={() => { if (onProfileClick) onProfileClick(); else navigate('/profile') }}
          >
            {avatarUrl
              ? <img src={avatarUrl} alt="Foto de perfil" className="avatar" />
              : <div className="avatar-placeholder" />
            }
          </button>
        </nav>

      </div>
    </header>
  )
}

export default Header