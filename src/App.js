import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Mainlist from './components/Mainlist'
import Playlist from './components/PlaylistDetails'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/react_fortnite_playlist" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mainlist" element={<Mainlist />} />
              <Route path="/mainlist/:id" element={<Playlist />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App