import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import star from '../images/star-icon.png';
function MoviePage() {
    const [currentmovie, setcurrentmovie] = useState(null)
    const { id } = useParams()
    async function fetchMovies() {
        if (id) {

            await axios.get(`https://www.omdbapi.com/?apikey=180f5a56&i=${id}`)
                .then(res => {

                    setcurrentmovie(res.data)

                })
        }
    }
    function formatNumber(number) {
     const num = number.replace(/,/g, '');
        if (num < 1e3) {
          return num.toString();
        } else if (num < 1e6) {
          return (num / 1e3).toFixed(1) + "K";
        } else if (num < 1e9) {
          return (num / 1e6).toFixed(1) + "M";
        } else if (num < 1e12) {
            return (num / 1e9).toFixed(1) + "B";
        } 
      }
      useEffect(() => {
          fetchMovies()
        }, [])
    console.log(currentmovie)
        
    return (
        <div className='cm-main'>
        {currentmovie ? 
            <>
            <div className='cm-wrap'>
                <div className="cm">
            <h3 className='cm-title'>{currentmovie?.Title}</h3>
                    <h4 className='mov-info'>{currentmovie?.Year + ' | ' + currentmovie?.Rated + ' | ' + currentmovie?.Runtime}</h4>
                    <img className='cm-poster' src={currentmovie?.Poster} alt="" />
                </div>
                <div className='mov-btns'>
                    <button className='btn-strm'><svg className='btn-svg' fill="#000000" height="100x" width="100x" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459" >

                        <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651
			l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416
			c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151
			C315.662,233.564,313.652,237.364,310.292,239.651z"/>

                    </svg>
                        <h6 className='btn-text'>

                            Watch on Zomo
                        </h6>
                    </button>
                    <button className='btn-watch'><svg className='btn-svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                    </svg><h6 className='btn-text'>
                            Add to Watchlist
                        </h6>
                    </button>
                </div>
                <div className='mov-plot'>

                <h5 className='plot-h5'>
                    {currentmovie.Plot}
                </h5>
                <hr />
                <div className='mov-ppl'>
                    <h5>
                    Director : {currentmovie.Director}
                    </h5>
                    <hr />
                    <h5>
                    Writers : {currentmovie.Writer}
                    </h5>
                    <hr />
                    <h5>
                        Stars : {currentmovie.Actors}
                    </h5>
                </div>
                </div>
            </div>
            <div className='ratings'>
                <b>
                Zomo Ratings
                </b>
                <div className='rt'>
                <img className='star' src={star} alt="" />
                <h6 className='imdb-rating'>{currentmovie?.imdbRating + '/10'}</h6>
                </div>
                <h4 className='mov-info'>{formatNumber(currentmovie.imdbVotes)}</h4>

            </div> 
</>
            : "null"}
        </div>
    )
}

export default MoviePage