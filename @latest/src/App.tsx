import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchPosts } from '../api'
import type { DogPost } from './components/types/Post'
import Feed from './components/Feed/Feed'
import Modal from './components/Modal/Modal'
import Profile from './components/Profile/Profile'
import SideBar from './components/SideBarRight/SideBarRight'
import Story from './components/Story/Story'
import SideBarLeft from './components/SideBarLeft/SideBarLeft'

import './App.css'

// Usernames simulados para las historias
const USUARIOS_STORIES = ['firulais.ok', 'laika_ok', 'max.perro', 'doggo22', 'husky.ar', 'puglover']

function App() {
  const [posts, setPosts] = useState<DogPost[]>([])
  const [cargando, setCargando] = useState(true)
  const [postSeleccionado, setPostSeleccionado] = useState<DogPost | null>(null)

  useEffect(() => {
    fetchPosts(12)
      .then((data) => setPosts(data))
      .finally(() => setCargando(false))
  }, [])

  return (

    <div className="app-layout">

      {/* SideBarLeft ahora vive DENTRO de app-contenido, como columna hermana del feed */}
      <div className="app-contenido">

        <SideBarLeft />
          <Routes>
            <Route
              path="/"
              element={
                cargando
                  ? <p className="cargando">Cargando publicaciones...</p>
                  : (
                    <>
                    <div className="feed-columna">
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
                    </div>
                    <SideBar />
                    </>
                  )
              }
            />
            <Route
              path="/perfil"
              element={ <div className="stories-barra"><Profile posts={posts} onVerDetalle={setPostSeleccionado} /></div>}
            />
          </Routes>

      </div>

      {/* El Modal se muestra encima de todo cuando hay un post seleccionado */}
      {postSeleccionado && (
        <Modal post={postSeleccionado} onCerrar={() => setPostSeleccionado(null)} />
      )}
    </div>
  )
}

export default App