import { useEffect, useState } from "react"
import { fetchMoviesFromDatabase } from "../../NetworkConnections"
import SingleMovie from "../SingleMovie/SingleMovie";

export default function MovieList(props){
    const [movies, setMovies] = useState(props.movies);
    useEffect(() => {
        if(movies) return;
        fetchMoviesFromDatabase(props.list)
            .then(res => setMovies(res.results));
    // eslint-disable-next-line
    }, []);
    
    // whenever the list of movies coming from props updates update our interal state of movies
    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies]);

    return <div className='movie-list-container'>
        <h2>{props.title}</h2>
        <div className='movie-list'>
            {movies?.map(movie => <SingleMovie key={movie.id} movie={movie} movieGenres={props.movieGenres} tvGenres={props.tvGenres}/>)}
        </div>
    </div> 
}