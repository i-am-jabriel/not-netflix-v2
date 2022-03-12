import logo from './logo.svg';
import './App.css';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import MovieList from './Components/MovieList/MovieList';

function App() {
  return (
    <div className='main-container'>
      <h1>Hello World!</h1>
      <SingleMovie id='12'/>
      <MovieList list='trending/movie/day' title='Trending Movies Today:'/>
    </div>
  );
}
export default App;
