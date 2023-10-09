import Home from './components/Home';
import { BrowserRouter, Route, Routes, Router, useParams } from 'react-router-dom';
import './App.css'
import Recomended from './components/Recomended';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import axios from 'axios';
import MoviePage from './components/MoviePage';
function App() {
  const [movies, setmovies] = useState(null)
  const [loading, setloading] = useState(false)

  async function fetchMovies() {

 
     
    await axios.get(`https://www.omdbapi.com/?apikey=180f5a56&s=${localStorage.getItem('search') ? localStorage.getItem('search') : 'American' }`)
    .then(res => {
      
      setmovies(res.data?.Search?.slice(0, 6))
      setTimeout(() => {
        
        setloading(true)
      }, 500);
    })
    .catch(err=>{
      console.log(err.Error)
    })
  }

  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
<Routes>
<Route path='/' element={<Home  ></Home>}></Route>
<Route path='/recommended' element={<Recomended loading={loading} movies={movies} fetchmovies={fetchMovies}></Recomended>}></Route>
<Route path='/search' element={<Search loading={loading} movies={movies} fetchmovies={fetchMovies} ></Search>}></Route>
<Route path='/movie/:id' element={<MoviePage></MoviePage>} ></Route>
</Routes>
  
      

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
