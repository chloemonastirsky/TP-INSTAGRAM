import React from 'react';
import './SideBar.css';

// 1. Definimos la estructura que va a tener cada usuario sugerido
type SugerenciaUsuario = {
  id: string;
  username: string;
  avatarUrl: string;
};

// 2. Agregamos 'usuariosSideBar' a las props del componente
type SidebarProps = {
  setCurrentView?: (view: 'home' | 'profile') => void;
  currentView?: 'home' | 'profile';
  usuariosSideBar?: SugerenciaUsuario[]; // 🔥 Es un array de usuarios sugeridos
};

const Sidebar: React.FC<SidebarProps> = ({ setCurrentView = () => {}, currentView = 'home', usuariosSideBar = [] }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Instagram</h2>
      </div>

      <nav className="sidebar-nav">
        <button 
          className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentView('home')}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Inicio</span>
        </button>

        {/* ... los demás botones que ya tenías impecables ... */}

        <button 
          className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
          onClick={() => setCurrentView('profile')}
        >
          <span className="nav-icon">👤</span>
          <span className="nav-text">Perfil</span>
        </button>
      </nav>

      {/* 🔥 3. Seccion para renderizar dinámicamente los usuarios si te los pasan */}
      {usuariosSideBar && usuariosSideBar.length > 0 && (
        <div className="sidebar-suggestions-section">
          <p className="suggestions-title">Sugerencias para ti</p>
          <div className="suggestions-list">
            {usuariosSideBar.map((usuario) => (
              <div key={usuario.id} className="suggestion-user-item">
                <img src={usuario.avatarUrl} alt={usuario.username} className="suggestion-avatar" />
                <span className="suggestion-username">{usuario.username}</span>
                <button className="follow-btn">Seguir</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="sidebar-footer">
        <button className="nav-item menu-more">
          <span className="nav-icon">☰</span>
          <span className="nav-text">Más</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;