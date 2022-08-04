import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import reactStringReplace from 'react-string-replace';
 
import './App.css'

function Mainlist() {
  const [playlists, setPlaylists] = useState([])
  
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    const resp = await fetch('https://fortnite-api.com/v1/playlists')
    const data = await resp.json()
  // FILTERING OUT OBJECTS W/O PICTURES AND PLACE THE RESULT INTO STATE
    setPlaylists(data.data.filter(withPic => withPic.images.showcase != null))
  }

  return (
    <div className='fetchedContainer'>
      {playlists.map(list => 
       <div className='fetchedList' key={uuidv4()}>
        <Link to={`/mainlist/${list.id}`}>
          <img className='mainPic' src={list.images.showcase} alt={list.name} />
          <img className='missionPic' src={list.images.missionIcon} alt={list.name} />
          <h3 className='listname'>{list.name}</h3>
          <h3 className='gametype'>
            {reactStringReplace(list.gameType, 'EFortGameType::', (match, i) => (
              <span>{match}</span>
              ))}
          </h3>
          <h3 className='rating'>{list.ratingType}</h3>
          <h3 className='players'>Max Players: {list.maxPlayers}</h3>
        </Link>
       </div> )}
    </div>
  )
}

export default Mainlist;