// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');


  function submitHandler() {
    const newMovie = {
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor
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
      
    </div>
  );
}

export default App;
