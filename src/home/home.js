import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    console.log('load in')
  }, [])
  return (
    <div className="body">
      <button
        className="pl5"
        onClick={() => {
          navigate('/pl5')
        }}
      >
        pl5
      </button>
    </div>
  )
}

export default Home
