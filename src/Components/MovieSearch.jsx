import { useEffect, useState } from "react"
import { TOKEN } from "../Config";
import { TMDB_BASE_URL } from "../Config";
import { TMDB_IMAGE_URL } from "../Config";
import { useSearchParams } from "react-router-dom";
import '../Components/MovieSearch.scss'

export default function MovieSearch () {
    const [searchParams] = useSearchParams()
    const debounceParams = searchParams.get('query')
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`
            }
        };
    async function fetchDataMovie() {
        try{
            const res = await fetch(`${TMDB_BASE_URL}/search/movie?query=${debounceParams}&include_adult=false&language=ko-KR&page=1`, options)
            const data = await res.json()
            const filteredMovies = data.results.filter((movie) => !movie.adult)
            setMovies(filteredMovies)
            console.log(filteredMovies)
            
        } catch(err) {
            console.error(err)
        }
    }
    fetchDataMovie()
},[debounceParams])

    return (
        <div className="movieCard">
            {movies.map((movie) => (
                <div key={movie.id} className="card">
                    <img 
                    className='img'
                    src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    />
                    <h2 className="title">{movie.title}</h2>
                    <p className="vote">⭐️: {movie.vote_average}</p>
                </div>
            ))}
        </div>
    )
}