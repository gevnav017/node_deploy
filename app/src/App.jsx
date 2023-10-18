import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Contacts from '../components/Contacts'

function App() {

  return (
    <>
      <ul style={{ display:"flex", justifyContent:"center", listStyleType:"none" }}>
        <li style={{ margin:"10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin:"10px" }}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
