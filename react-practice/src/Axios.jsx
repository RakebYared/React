import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
    const API = 'https://api.themoviedb.org/3/movie/popular?api_key=ad99fe54e262f888c08925483eeeab9a'
    const [movies, setMovies] = useState([])
    const [watchlist, setWatchList] = useState([])
    useEffect( ()=>{
        const fetchdata = async () => {
            const response = await axios.get(API)
            setMovies(response.data.results)
            // console.log(response.data.results)

        };
        fetchdata()
    }   
        , []);

        const handleAdd = (movie)=> {
            setWatchList([... watchlist, movie])

        };
  
        return (
    <div>
        <p className='text-2xl'>Watch list</p>
        <ul>
            {
                watchlist.map((movie, i)=>(
                    <li key = {i}><img className = 'w-10' src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}` }/> 
                    <p className='text-name'>{movie.title}</p>
                    </li>
                ))
            }
        </ul>
        <ul>
            {
                movies.map((movie, i)=>(
                    <li key = {i}><img className = 'w-10' src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}` }/> 
                    <p className='text-name'>{movie.title}</p>
                    <button className='bg-amber-600' onClick={() => handleAdd(movie)}>Add</button>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Axios
