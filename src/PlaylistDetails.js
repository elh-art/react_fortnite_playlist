import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom';
import './App.css'

function Playlist() {

const {id} = useParams()

useEffect(() => {
  fetchPlaylist()
},[])

const [playlist, setPlaylist] = useState([])

const fetchPlaylist = async() => {
  const resp = await fetch(`https://fortnite-api.com/v1/playlists/${id}`)
  const data = await resp.json()
  setPlaylist(data.data)
}

  return (
    <div>
      <h1>{playlist.name}</h1>
      <h2>{playlist.gameType}</h2>
      <h3>{playlist.ratingType}</h3>
    </div>
  )
}

export default Playlist;