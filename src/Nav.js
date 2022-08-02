import './App.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <img src={require('./fortnite-logo-vector.png')} alt="Fortnite Logo" />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/mainlist">
          <li>Playlists</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;