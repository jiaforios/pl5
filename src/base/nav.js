import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './nav.css'
const Nav = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="body">
      <div className="nav-view">
        <button
          className="back-btn"
          onClick={() => {
            navigate(-1)
          }}
        >
          返回
        </button>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}
export default Nav
