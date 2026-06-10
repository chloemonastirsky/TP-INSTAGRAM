import { useState, useEffect, useRef } from 'react'
import { fetchPosts } from '../api'
import type { DogPost } from './components/types/Post'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import type { HeaderProps } from './components/types/Header'
import SideBar from './components/SideBar/SideBar'
import './App.css'

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
        {loading ? <p>Cargando perritos...</p> : <Feed posts={posts} />}
        <SideBar  
          currentUser={{
            username: 'dog_lover_2026',
            avatarUrl: posts[0]?.url ?? '',
            fullName: 'Firulais & Co.'
          }}
          suggestions={[]}
        />
      </div>
    </div>
  )
}

export default App