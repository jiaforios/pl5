import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './base/nav'
// 导入页面组件
import Home from './home/home'
import About from './about/about'
import PL5 from './home/feature/pl5/pl5'
import PL5History from './home/feature/pl5/history'
const RootRoutes = () => {
  return (
    <Router>
      <Nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pl5" element={<PL5 />} />
          <Route path="/pl5history" element={<PL5History />} />
        </Routes>
      </Nav>
    </Router>
  )
}

export default RootRoutes
