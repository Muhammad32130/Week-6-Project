import React from 'react'
import Nav from "./Nav.jsx"
import Footer from './Footer.jsx'
import search from '../images/search-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
function Home({setsearch}) {
  const navigate = useNavigate();
    function setSearchPreventDefault(event){
      event.preventDefault();
      setsearch(event?.target[0].value)
      navigate(`/search`)
    }


  return (
    <div>
        <div className='welc-text'>
            <h1 className='welc-h1'>Welcome to Zomo Movies! </h1>
            <h2 className='welc-h2'>Find you favorite movies with the click of a button, or view recomended!</h2>

        </div>
        <div className='input-wrap'>
            <h3>Search for your movie or shows!</h3>
            <div className='inp-contain'>
              <form  onSubmit={(event)=>{setSearchPreventDefault(event)}}>

            <input className='inp_home' placeholder='Search' />
         
            <button className='sub-btn' type='submit'>
            <img className='logo-search' src={search} alt="" />
            </button>
              </form>
            </div>

        
            <Link className='btn-rcmnd' onClick={setsearch(null)} to={'/recommended'}>
            View Recommended !
            </Link>
         
        </div>
    </div>
  )
}

export default Home