import './App.css';
import MovieList from './Components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchMoviesFromDatabase } from './NetworkConnections';
import Calendar from 'react-calendar';

function App() {
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTVGenres] = useState([]);
  const [value, setValue] = useState(new Date());

  //when my component loads for the first time
  useEffect(()=>{
    // fetch the entire list of movie genres
    fetchMoviesFromDatabase('genre/movie/list')
      .then(res => setMovieGenres(res.genres))

      // fetch the entire list of tv genres
    fetchMoviesFromDatabase('genre/tv/list')
      .then(res => setTVGenres(res.genres))
  }, []);
  return (
    <div className='main-container'>
      <h1>Hello World!</h1>
      {/* <SingleMovie id='12' genres={genres}/> */}
      <MovieList list='trending/all/day' title='Trending In Films' movieGenres={movieGenres} tvGenres={tvGenres}/>
      <MovieList list='movie/upcoming' title='Upcoming Movies' movieGenres={movieGenres} tvGenres={tvGenres}/>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}
export default App;
