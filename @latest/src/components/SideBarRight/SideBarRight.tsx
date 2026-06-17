import { useNavigate } from 'react-router-dom'
import './SideBarRight.css'

// Usuarios sugeridos simulados
const SUGERENCIAS = [
  { id: '1', username: 'golden.retriever.arg', razon: 'Te sigue', avatar: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_2535.jpg' },
  { id: '2', username: 'husky_de_baires', razon: 'Nuevo en Instagram', avatar: 'https://images.dog.ceo/breeds/husky/n02110185_10131.jpg' },
  { id: '3', username: 'pug.master.ok', razon: 'Nuevo en Instagram', avatar: 'https://images.dog.ceo/breeds/pug/n02123394_1119.jpg' },
  { id: '4', username: 'labradorlover22', razon: 'Te sigue', avatar: 'https://images.dog.ceo/breeds/labrador/n02099712_3050.jpg' },
  { id: '5', username: 'dachshund.world', razon: 'Nuevo en Instagram', avatar: 'https://images.dog.ceo/breeds/dachshund/n02088364_11154.jpg' },
]

const SideBar = () => {
  const navigate = useNavigate()

  return (
    <aside className="sidebar">

      {/* Perfil del usuario logueado */}
      <div className="sidebar-perfil">
        <img
          src="https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg"
          alt="Mi perfil"
          className="sidebar-perfil-avatar"
        />
        <div className="sidebar-perfil-info">
          <p className="sidebar-perfil-username" onClick={() => navigate('/perfil')}>
            dog_lover_2026
          </p>
          <p className="sidebar-perfil-nombre">Firulais & Co.</p>
        </div>
        <button className="sidebar-cambiar-btn">Cambiar</button>
      </div>

      {/* Sugerencias para seguir */}
      <div className="sidebar-sugerencias-header">
        <p className="sidebar-sugerencias-titulo">Sugerencias para ti</p>
        <button className="sidebar-ver-todo-btn">Ver todo</button>
      </div>

      <ul className="sidebar-sugerencias">
        {SUGERENCIAS.map((usuario) => (
          <li key={usuario.id} className="sidebar-sugerencia-item">
            <img src={usuario.avatar} alt={usuario.username} className="sidebar-sugerencia-avatar" />
            <div className="sidebar-sugerencia-info">
              <p className="sidebar-sugerencia-username">{usuario.username}</p>
              <p className="sidebar-sugerencia-razon">{usuario.razon}</p>
            </div>
            <button className="sidebar-seguir-btn">Seguir</button>
          </li>
        ))}
      </ul>

      {/* Links del footer */}
      <p className="sidebar-footer">
        Acerca de · Ayuda · Privacidad · Condiciones
      </p>

    </aside>
  )
}

export default SideBar