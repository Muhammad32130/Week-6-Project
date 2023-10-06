import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function MoviePage() {
    const [currentmovie, setcurrentmovie] = useState(null)
    const {id} = useParams()
    async function fetchMovies() {
        if(id){

            await axios.get(`https://www.omdbapi.com/?apikey=180f5a56&i=${id}`)
            .then(res => {
                
                setcurrentmovie(res.data)
                
            })
        }
    }
    useEffect(()=>{
        fetchMovies()
    },[])
    console.log(id)
    console.log(currentmovie)
  return (
    <div>
        <img src={currentmovie?.Poster} alt="" />
        <h3>{currentmovie?.Title}</h3>
    </div>
  )
}

export default MoviePage