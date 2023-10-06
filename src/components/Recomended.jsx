import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function Recomended({movies, fetchmovies}) {

console.log(movies)
useEffect(()=>{

    fetchmovies()
    
},[])
    return (
        <div className='rcmnd-contain'>
            <h1 className='rcmnd-head-text'>Check out our recomended movies!</h1>

            <div className='mov-contain'>


                {movies?.map(m => {

                    return (
                        <div className='mov-wrap'>
                            <div className='hover-mov'>
                            <img className='poster' src={m.Poster} alt="" />
                            <h4 className='title'>{m.Title}</h4>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Recomended