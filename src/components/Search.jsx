import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import searchbtn from '../images/search-icon.svg'
import Skeleton from './Skeleton'
import noimg from '../images/No_img.png'

function Search({ movies, search, fetchmovies, loading }) {


    useEffect(() => {

        fetchmovies()
    }, [search])
    return (
        <div className='rcmnd-contain'>

            {loading ? <div className="mov-contain">
                {
                    movies ?

                        movies?.map(m => {
                            console.log(m.Poster === "N/A")

                            return (
                                <div className='mov-wrap'>
                                    <div className='hover-mov'>
                                        <Link className='id-link' to={`/movie/${m.imdbID}`}  >



                                            <img className='poster' src={m.Poster === "N/A" ? noimg : m.Poster} alt="" />

                                            <h4 className='title'>{m.Title}</h4>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='mov-not-fnd'>
                            <h4 className='mov-not-txt'>Can't find what you searched for, try searching something else.</h4>
                            <div>

                                <Link className='btn-rcmnd hbtn' to={'/'}>
                                    Back to Home!
                                </Link>
                                <Link className='btn-rcmnd rbtn' to={'/recommended'}>
                                    View Recommended !
                                </Link>
                            </div>
                        </div>
                }
            </div> :
                <div className="mov-contain">
                    {Array.from({ length: 6 }, (_, index) =>
                        <div key={index} className='mov-wrap'>
                            <div className='hover-mov'>
                                <Skeleton height={240} width={162}></Skeleton>
                                <Skeleton margin={1} height={24} width={162}></Skeleton>
                            </div>
                        </div>


                    )}
                </div>
            }
        </div>
    )
}

export default Search