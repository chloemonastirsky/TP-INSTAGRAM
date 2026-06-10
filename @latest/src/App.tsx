import { useState, useEffect } from 'react'
import { fetchPosts } from '../api'
import type { DogPost } from './components/types/Post'
import Header from './components/Header/Header'
import type Feed from './components/Feed/Feed'
import type { HeaderProps } from './components/types/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  const [posts, setPosts] = useState<DogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts(5)
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        {loading ? <p>Cargando perritos...</p> : <Feed posts={posts} />}
        <Sidebar
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