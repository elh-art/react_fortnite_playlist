import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom';
import reactStringReplace from 'react-string-replace';
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
    <div className='detailedList'>
      <div className='detailedContainer'>
  {/* THE NEXT TWO ROWS OF CODE IS A WORKAROUND. {playlist.images.showcase} & {...missionIcon} THROWS AN ERROR. IF YOU KNOW WHY PLS LET ME KNOW! */}
        <img className='detailedPic' src={`https://fortnite-api.com/images/playlists/${id}/showcase.png`} alt={playlist.name} />
        <img className='missionPic' src={`https://fortnite-api.com/images/playlists/${id}/missionicon.png`} alt={playlist.maxTeamSize} />
        <h1 className='listname'>{playlist.name}</h1>
        <h2 className='subname'>{playlist.subName}</h2>
        <h3 className='gametype'>Game type: {' '}
              {reactStringReplace(playlist.gameType, 'EFortGameType::', (match, i) => (
              <span> {match} </span>
              ))} 
            </h3>
        <h3 className='rating'>Rating type: <span>{playlist.ratingType}</span></h3>
        <h3 className='players'>Max Players: <span>{playlist.maxPlayers}</span></h3>
        <h3 className='maxteams'>Max number of teams: <span>{playlist.maxTeamSize}</span></h3>
        <h3 className='maxsquad'>Max squad size: <span>{playlist.maxSquadSize}</span></h3>
      </div>
      <h3 className='description'>{playlist.description}</h3>
    </div>
  )
}

export default Playlist;