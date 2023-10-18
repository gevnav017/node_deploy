import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Movies from '../components/Movies'

function App() {

  return (
    <>
      <ul style={{ display:"flex", justifyContent:"center", listStyleType:"none" }}>
        <li style={{ margin:"10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin:"10px" }}>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
