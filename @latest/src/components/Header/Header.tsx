import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <span className="header-logo" onClick={() => navigate('/')}>
          Instagram
        </span>

      

      </div>
    </header>
  )
}

export default Header