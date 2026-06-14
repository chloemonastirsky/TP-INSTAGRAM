import type { ProfileProps } from '../types/Profile'
import './Profile.css'
import Post from '../Post/Post'

// Datos del usuario logueado (simulado, sin login real)
const USUARIO = {
  username: 'dog_lover_2026',
  nombreCompleto: 'Firulais & Co.',
  bio: 'Explorando el mundo, un ladrido a la vez 🐾 Amante de las caminatas largas.',
  seguidores: '12.4K',
  seguidos: '482',
  avatar: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg',
}

const Profile = ({ posts, onVerDetalle }: ProfileProps) => {
  return (
    <div className="perfil">

      {/* Encabezado del perfil */}
      <header className="perfil-header">
        <img src={USUARIO.avatar} alt="Foto de perfil" className="perfil-foto" />

        <div className="perfil-info">
          {/* Fila con username y botón editar */}
          <div className="perfil-fila-usuario">
            <h2 className="perfil-username">{USUARIO.username}</h2>
            <button className="perfil-btn-editar">Editar perfil</button>
          </div>

          {/* Estadísticas */}
          <ul className="perfil-stats">
            <li><strong>{posts.length}</strong> publicaciones</li>
            <li><strong>{USUARIO.seguidores}</strong> seguidores</li>
            <li><strong>{USUARIO.seguidos}</strong> seguidos</li>
          </ul>

          {/* Bio */}
          <div className="perfil-bio">
            <p className="perfil-nombre">{USUARIO.nombreCompleto}</p>
            <p>{USUARIO.bio}</p>
          </div>
        </div>
      </header>

      <hr className="perfil-divisor" />

      {/* Grilla de publicaciones */}
      <div className="perfil-grilla">
        {posts.map((post) => (
          <div
            key={post.id}
            className="perfil-grilla-item"
            // onClick={() => onVerDetalle({ id: post.id, url: post.url })}
          >
            <img src={post.url} alt="Publicación" className="perfil-grilla-imagen" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Profile