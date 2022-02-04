// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  const movie = {
    title: movieTitle,
    director: movieFormDirector,
    year: movieFormYearReleased,
    color: movieFormColor,
  };

  function submitHandler(e) {
    e.preventDefault();

    const newMovie = {
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };
    setAllMovies([...allMovies, newMovie]);
  }
  function deleteMovieHandler(id) {
    const indexOfMovie = allMovies.findIndex((movie) => movie.title === id);

    allMovies.splice(indexOfMovie, 1);

    setAllMovies([...allMovies]);
  }

  return (
    <div className="App">
      <section>
        <h3>Movie Stuff</h3>
        <p>Title: {movieTitle}</p>
        <p>Director: {movieFormDirector}</p>
        <p>Year Released: {movieFormYearReleased}</p>
        <p>Color: {movieFormColor}</p>
      </section>
      <MovieForm setMovieTitle={setMovieTitle} submitHandler={submitHandler} movies={movie} />
      <MovieList />
    </div>
  );
}

export default App;
