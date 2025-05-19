import { useEffect, useState } from "react";
import { TMDB_IMAGE_URL } from "../Config";
import { TMDB_BASE_URL } from "../Config";
import { TOKEN } from "../Config";
import { useParams } from "react-router-dom";

export default function MovieDetail () {
    const { id } = useParams()
    const [movies, setMovies] = useState(null)
    
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
            const res = await fetch(`${TMDB_BASE_URL}/movie/${id}?language=ko-KR&page=1`, options)
            const data = await res.json()
            setMovies(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchMovieData()
    },[id])

    if (!movies) return <p>Loading...</p>

    return (
        <div>
            <img src={`${TMDB_IMAGE_URL}${movies.poster_path}`}/>
            <h2>{movies.title}</h2>
            <p>장르: 
                {movies.genres.map((g)=>(g.name)).join(', ')}
            </p>
            <p>{movies.overview}</p>
        </div>
    )
}