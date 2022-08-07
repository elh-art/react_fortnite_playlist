import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
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
    <div className='detailedList' key={uuidv4()}>
      <div className='detailedContainer' key={uuidv4()}>
  {/* THE NEXT TWO ROWS OF CODE IS A WORKAROUND. {playlist.images.showcase} & {playlist.images.missionIcon} THROW AN ERROR. IF YOU KNOW WHY PLS LET ME KNOW! */}
        <img className='detailedPic' key={uuidv4()}
            src={`https://fortnite-api.com/images/playlists/${id}/showcase.png`} 
            alt={playlist.name} />
        <img className='missionPic' key={uuidv4()}
            src={`https://fortnite-api.com/images/playlists/${id}/missionicon.png`} 
            alt={playlist.maxTeamSize} />
        <h1 className='listname' key={uuidv4()}>{playlist.name}
        </h1>
        <h3 className='maxteams' key={uuidv4()}>Max number of teams: <span>{playlist.maxTeamSize}</span>
        </h3>
        <h3 className='maxsquad' key={uuidv4()}>Max squad size: <span>{playlist.maxSquadSize}</span>
        </h3>
        <h3 className='gametype' key={uuidv4()}>Game type: {' '}
              {reactStringReplace(playlist.gameType, 'EFortGameType::', (match, i) => (
              <span> {match} </span>
              ))} 
        </h3>
        <h3 className='players' key={uuidv4()}>Max Players: <span>{playlist.maxPlayers}</span>
        </h3>
        <h3 className='rating' key={uuidv4()}>Rating type: <span>{playlist.ratingType}</span>
        </h3>
        <h2 className='subname' key={uuidv4()}>{playlist.subName}</h2>
      </div>
      <h3 className='description' key={uuidv4()}>{playlist.description}</h3>
    </div>
  )
}

export default Playlist