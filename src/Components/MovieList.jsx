import '../Components/MovieList.scss'
import { useEffect, useState } from "react";
import { TMDB_IMAGE_URL } from "../Config";
import { TMDB_BASE_URL } from "../Config";
import { TOKEN } from "../Config";
import { useNavigate } from 'react-router-dom';

export default function MovieList () {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        
        async function fetchMovieData() {
            try {
            const res = await fetch(`${TMDB_BASE_URL}/movie/popular?language=ko-KR&page=1`, options)
            const data = await res.json()
            console.log(data)

            const filteredMovies = data.results.filter((movie)=> movie.adult === false)
                setMovies(filteredMovies)
            } catch (err) {
                console.error(err)
            }
        }
        fetchMovieData()
    },[])

    return (
        <div className='movieCard'>
        {movies.map((movie)=>(
            <div 
                key = {movie.id} 
                className='card'
                onClick={() => navigate(`/details/${movie.id}`)}
            >
            <img 
                className='img'
                src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
            />
            <h2 className='title'>{movie.title}</h2>
            <p className='vote'>⭐️ {movie.vote_average}</p>
            </div>
))}
        </div>
    )
}
