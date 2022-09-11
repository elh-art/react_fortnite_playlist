import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div className='about-container'>
      <h1 className='aboutSite'>
        Fortnite is a massive online multiplayer game made by Epic Games on Unreal Engine 4. This site presents all the different <Link to="/mainlist">game-modes</Link> available in the game.
      </h1>
      <h1 className='aboutSite'>
        Fortnite has four distinct <Link to="/mainlist">game-modes</Link>: Save the World, Battle Royale, Zero Build, and Creative. You can get detailed information about them under <Link to="/mainlist">Playlists</Link>.  
      </h1>
      <img src={require('../assets/Fortnite-Gamemods.jpg')} 
          alt="Fortnite website" />
    </div>
  )
}

export default Home