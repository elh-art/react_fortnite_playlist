import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/HomeAbout.css'

function NotFound() {
const navigate = useNavigate()

useEffect(() => {
  setTimeout(() => {
    navigate("/")
  }, 2000)
}, [])

  return (
    <div className='about-container'>
      <h1 className='aboutSite'>
        Not found... 😟
      </h1>
    </div>
  )
}

export default NotFound