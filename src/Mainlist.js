import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
 
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
    <div>
      {playlists.map(list => 
       <div>
        <img key={uuidv4()} src={list.images.showcase} alt={list.name} />
        <Link to={`/mainlist/${list.id}`}>
          <h1 key={uuidv4()}>{list.name}</h1>
        </Link>
       </div> )}
    </div>
  )
}

export default Mainlist;