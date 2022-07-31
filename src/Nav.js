import './App.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/mainlist">
          <li>Main list</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;