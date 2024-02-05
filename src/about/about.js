import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => {
          navigate('/home')
        }}
      >
        tab2
      </button>
    </div>
  )
}

export default About
