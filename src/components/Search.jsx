import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Search({movies,search, fetchmovies}) {
    const {id} = useParams()


    useEffect(()=>{
fetchmovies()
console.log("test")
    },[])
  return (
    <div className='rcmnd-contain'>

    <div className="mov-contain">
        {movies?.map(m=>{
            
            return (
                <div className='mov-wrap'>
                            <div className='hover-mov'>
                                <Link className='id-link' to={`/movie/${m.imdbID}`}  >
                            <img className='poster' src={m.Poster}  alt="" />
                            <h4 className='title'>{m.Title}</h4>
                                </Link>
                            </div>
                        </div>
                )
            })
        }
    </div>
        </div>
  )
}

export default Search