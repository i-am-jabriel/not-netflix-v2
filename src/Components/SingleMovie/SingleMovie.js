import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase } from "../../NetworkConnections";

export default function SingleMovie(props){
    // useState - to create state
    const [movie, setMovie] = useState(props.movie);
    // useEffect - only fire code when the component is loaded for the first time
    useEffect(()=>{
        if(movie) return;
        // fetch movie if it not coming in from parent
        fetchMoviesFromDatabase(`movie/${props.id}`)
            .then(res => setMovie(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const genres = movie?.original_title ? props.movieGenres : props.tvGenres
    // const doSomething
    return <div className='movie-card'>
        <h1>{movie?.original_title || movie?.original_name}</h1>
        {movie && <img alt={`poster for ${movie?.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>}
        <p>{movie?.overview}</p>
        {/* <p>{movie?.genre_ids}</p> */}
        {/* Mapping over genre of movies to turn the ids into names*/}
        <p>{ movie?.genre_ids?.map(genre_id => <p>{genres?.find(genre => genre.id === genre_id)?.name}</p> ) }</p>
    </div>
}