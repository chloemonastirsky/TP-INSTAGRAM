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

  // Lista simulada de usuarios para las historias (Basado en la captura)
  const mockStories = [
    { id: 1, username: 'itsdougthepug', img: 'https://images.dog.ceo/breeds/pug/n02123394_1119.jpg', hasStory: true },
    { id: 2, username: 'opendoorcharity', img: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_2535.jpg', hasStory: true },
    { id: 3, username: 'lewis-fans', img: 'https://images.dog.ceo/breeds/terrier-irish/n02093991_403.jpg', hasStory: true },
    { id: 4, username: 'rocketdog', img: 'https://images.dog.ceo/breeds/husky/n02110185_10131.jpg', hasStory: false },
    { id: 5, username: 'dailycanines', img: 'https://images.dog.ceo/breeds/pomeranian/n02112018_2801.jpg', hasStory: true },
    { id: 6, username: 'mkbhd_dog', img: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5393.jpg', hasStory: false }
  ]

  return (
    <header className="ig-header">
      <div className="ig-header-inner">

        {/* Logo de Instagram a la izquierda */}
        <span className="ig-logo" onClick={onHomeClick} role="button" tabIndex={0}>
          Instagram
        </span>
    
        {/* 🔥 NUEVO: Sección centralizada de Historias */}
        <div className="ig-stories-container">
          {mockStories.map((story) => (
            <div key={story.id} className="story-item">
              <div className={`story-avatar-ring ${story.hasStory ? 'active-story' : 'seen-story'}`}>
                <div className="story-avatar-bg">
                  <img src={story.img} alt={`Historia de ${story.username}`} className="story-img" />
                </div>
              </div>
              <span className="story-username">{story.username}</span>
            </div>
          ))}
        </div>

        {/* Navegación de íconos a la derecha */}
        <nav className="ig-nav" aria-label="Navegación principal">
          {/* <button className="nav-btn" aria-label="Inicio" onClick={onHomeClick}>
            🏠
          </button>
          
          <button className="nav-btn" aria-label="Mensajes directos" onClick={onMessagesClick}>
            DM
          </button>
          
          <button className="nav-btn" aria-label="Crear publicación" onClick={onCreateClick}>
            ➕
          </button>
          
          <button className="nav-btn" aria-label="Explorar" onClick={onExploreClick}>
            🧭
          </button>
          
          <button className="nav-btn notification-btn" aria-label="Notificaciones" onClick={onNotificationsClick}>
            ❤️
            {hasNotification && <span className="notification-badge" />}
          </button> */}

          {/* Botón de Perfil con Avatar Circular */}
          <button
            className="avatar-btn"
            aria-label="Ver perfil"
            onClick={() => { if (onProfileClick) onProfileClick(); else navigate('/profile') }}
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt="Foto de perfil" className="header-avatar-img" />
            ) : (
              <div className="avatar-placeholder" />
            )}
          </button>
        </nav>

      </div>
    </header>
  )
}

export default Header