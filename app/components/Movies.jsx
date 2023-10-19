import React, { useState, useEffect } from 'react'

const Movies = () => {
  const [movies, setMovies] =useState([])
  const [newMovie, setNewMovie] = useState("")

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch("http://44.225.165.236:8080/movies")
        const data = await response.json()
        setMovies(data)
      }
      catch (err) {
        console.log(err)
      }
    }

    getMovies()
  }, [movies])

  const insertMovie = () => {
    fetch("http://44.225.165.236:8080/movies", {
      method: "POST",
      body: JSON.stringify({ newMovie }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => console.log("Inserted movie " + data.movie + " successfully"))
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <h1>Movies</h1>

      <input type="text" placeholder='movie' onChange={(e) => {setNewMovie(e.target.value)}} />
      <button style={{ marginLeft: "6px" }} type="submit" onClick={insertMovie}>Submit</button>

      {movies && movies.map((movie) => 
        <div key={movie.id} style={{ margin:"6px" }}>{movie.movie}</div>
      )}
    </>
  )
}

export default Movies