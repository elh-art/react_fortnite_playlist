import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Mainlist from './components/Mainlist'
import Playlist from './components/PlaylistDetails'
import './App.css'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/react_fortnite_playlist" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mainlist">
                <Route index element={<Mainlist />} />
                <Route path=":id" element={<Playlist />} />
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  )
}

export default App