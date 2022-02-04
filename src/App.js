// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  const state = {
    setMovieTitle,
    setMovieFormDirector,
    setMovieFormYearReleased,
    setMovieFormColor,
  };
  const movie = {
    title: movieTitle,
    director: movieFormDirector,
    year: movieFormYearReleased,
    color: movieFormColor,
  };

  function submitHandler(e) {
    e.preventDefault();

    const newMovie = {
      id: Math.ceil(Math.random() * 1000),
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };
    setAllMovies([...allMovies, newMovie]);
  }
  function deleteMovieHandler(id) {
    const indexOfMovie = allMovies.findIndex((movie) => movie.id === id);

    allMovies.splice(indexOfMovie, 1);

    setAllMovies([...allMovies]);
  }

  return (
    <div className="App">
      <section>
        <h3>Movie Stuff</h3>

        <Movie {...movie} />
      </section>
      <MovieForm {...state} submitHandler={submitHandler} movies={movie} />
      <MovieList movies={allMovies} deleteMovieHandler={deleteMovieHandler} />
    </div>
  );
}
// setMovieFormDirector={setMovieFormDirector} setMovieTitle={setMovieTitle}
export default App;
