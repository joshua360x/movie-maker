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

  // manages state for objects and also holds movie objects for easier naming convention
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
  // ----------------------------------

  // handle submit
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

    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('');
  }

  // delete function and this takes in an id
  function deleteMovieHandler(id) {
    const indexOfMovie = allMovies.findIndex((movie) => movie.id === id);

    allMovies.splice(indexOfMovie, 1);

    setAllMovies([...allMovies]);
  }

  // filter funtion to help navigate through movies
  function handleFilter(query) {
    const movieSearch = allMovies.filter((movie) => movie.title.includes(query));
    if (query) {
      setFilteredMovies(movieSearch);
    } else {
      setFilteredMovies(allMovies);
    }
  }

  return (
    <div className="App">
      <section>
        <h3>Movie Stuff</h3>

        <Movie {...movie} />
        <label>
          Find Your Movie
          <input type="text" onChange={(e) => handleFilter(e.target.value)} />
        </label>
      </section>
      <MovieForm {...state} submitHandler={submitHandler} movies={movie} />
      <MovieList
        movies={filteredMovies.length > 0 ? filteredMovies : allMovies}
        deleteMovieHandler={deleteMovieHandler}
      />
    </div>
  );
}
// setMovieFormDirector={setMovieFormDirector} setMovieTitle={setMovieTitle}
export default App;
