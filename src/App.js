import Nav from './Nav'
import Home from './Home'
import About from './About'
import Mainlist from './Mainlist'
import Playlist from './PlaylistDetails'
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