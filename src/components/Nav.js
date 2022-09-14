import { NavLink } from 'react-router-dom'
import '../css/Nav.css'

function Nav() {

  return (
    <nav>
      <img src={require('../assets/fortnite-logo-vector.png')} alt="Fortnite Logo" />
      <ul className="nav-links">
        <NavLink style={({ isActive }) => {
          return isActive ? {borderBottom:"2px solid purple"} : {}
          }} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink style={({ isActive }) => {
          return isActive ? {borderBottom:"2px solid purple"} : {}
          }} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink style={({ isActive }) => {
          return isActive ? {borderBottom:"2px solid purple"} : {}
          }} to="/mainlist">
          <li>Playlists</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav