import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchPosts } from '../api'
import type { DogPost } from './components/types/Post'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import Modal from './components/Modal/Modal'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'
import Story from './components/Story/Story'
import './App.css'

// Usernames simulados para las historias
const USUARIOS_STORIES = ['firulais.ok', 'laika_ok', 'max.perro', 'doggo22', 'husky.ar', 'puglover']

function App() {
  const [posts, setPosts] = useState<DogPost[]>([])
  const [cargando, setCargando] = useState(true)
  const [postSeleccionado, setPostSeleccionado] = useState<DogPost | null>(null)
  const fetchedRef = useRef(false)

  useEffect(() => {
    // Evita la doble llamada de React Strict Mode en desarrollo
    if (fetchedRef.current) return
    fetchedRef.current = true

    fetchPosts(12)
      .then((data) => setPosts(data))
      .finally(() => setCargando(false))
  }, [])

  return (
    <div className="app-layout">
      <Header />

      <div className="app-contenido">
        <Routes>
          <Route
            path="/"
            element={
              cargando
                ? <p className="cargando">Cargando publicaciones...</p>
                : (
                  <div>
                    {/* Barra de historias — usa los primeros 6 posts como fotos */}
                    <div className="stories-barra">
                      {posts.slice(0, 6).map((post, indice) => (
                        <Story
                          key={post.id}
                          post={post}
                          username={USUARIOS_STORIES[indice]}
                          vista={indice === 0}   // la primera historia ya fue vista
                        />
                      ))}
                    </div>

                    <Feed posts={posts} onVerDetalle={setPostSeleccionado} />
                  </div>
                )
            }
          />
          <Route
            path="/perfil"
            element={<Profile posts={posts} onVerDetalle={setPostSeleccionado}   />}
          />
        </Routes>

        <SideBar />
      </div>

      {/* El Modal se muestra encima de todo cuando hay un post seleccionado */}
      {postSeleccionado && (
        <Modal post={postSeleccionado} onCerrar={() => setPostSeleccionado(null)} />
      )}
    </div>
  )
}

export default App