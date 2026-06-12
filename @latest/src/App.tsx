import { useState, useEffect, useRef } from 'react'
import { fetchPosts } from '../api'
import type { DogPost } from './components/types/Post'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
// import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/SideBar/SideBar'

function App() {
  const [posts, setPosts] = useState<DogPost[]>([])
  const [loading, setLoading] = useState(true)
  const fetchedRef = useRef(false)

  useEffect(() => {
    // Prevent double fetch in React Strict Mode (dev)
    if (fetchedRef.current) return
    fetchedRef.current = true

    fetchPosts(10)
      .then((data) => {
        // dedupe by id just in case the API returns duplicates
        const unique = data.filter((item, idx, arr) => arr.findIndex(a => a.id === item.id) === idx)
        setPosts(unique)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={loading ? <p>Cargando perritos...</p> : <Feed posts={posts} />}
          />
          <Route
            path="/profile"
            element={<Profile posts={posts} onSelectPost={() => {}} />}
          />
        </Routes>

         <SideBar>
         </SideBar>
         <SideBar usuariosSideBar={[{ id: '1', username: 'sug1', avatarUrl: 'https://place-puppy.com/50x50' }]} />

        </div>
    </div>
  )
}

export default App