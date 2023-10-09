import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from './Skeleton'

function Recomended({movies,loading, fetchmovies}) {


useEffect(()=>{
localStorage.clear()
    fetchmovies()
    
},[])
    return (
        <div className='rcmnd-contain'>
            <h1 className='rcmnd-head-text'>Check out our recomended movies!</h1>

           {loading ? <div className='mov-contain'>


                {movies?.map(m => {

                    return (
                        <div className='mov-wrap'>
                            <div className='hover-mov'>
                            <Link className='id-link' to={`/movie/${m.imdbID}`}  >
                            <img className='poster' src={m.Poster} alt="" />
                            <h4 className='title'>{m.Title}</h4>
                            </Link>
                            </div>
                        </div>
                    )
                })
                }
            </div>:
            <div className='mov-contain'>

            { Array.from({length: 6}, (_, index)=>
            <div key={index} className='mov-wrap'>
                                <div className='hover-mov'>
                                <Skeleton height={240} width={162}></Skeleton>
                                <Skeleton margin={1} height={24} width={162}></Skeleton>
                                </div>
                            </div>
            
            
            ) }
            
            </div>
            
            }
        </div>
    )
}

export default Recomended