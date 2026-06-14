import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchPosts } from '../api'
import type { DogPost } from './components/types/Post'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import Modal from './components/Modal/Modal'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBar/SideBar'
import './App.css'

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
                : <Feed posts={posts} onVerDetalle={setPostSeleccionado} />
            }
          />
          <Route
            path="/perfil"
            element={<Profile posts={posts} onVerDetalle={setPostSeleccionado} />}
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