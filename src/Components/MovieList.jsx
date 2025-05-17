import { useEffect, useState } from "react";
import { TMDB_IMAGE_URL } from "../Config";
import { TMDB_BASE_URL } from "../Config";
import { TOKEN } from "../Config";

export default function MovieList () {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        };
        
        fetch(`${TMDB_BASE_URL}/movie/popular?language=ko-KR&page=1`, options)
        .then(res => res.json())
        .then(res => setMovies(res.results))
        .catch(err => console.error(err));
    },[])

    return (
        <div>
        {movies.map((movie)=>(
            <div key = {movie.id}>
            <img 
                src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>⭐️ {movie.vote_average}</p>
            </div>
))}
        </div>
    )
}
