import React from 'react';

export default function MovieForm({
  submitHandler,
  movies,
  setMovieTitle,
  setMovieFormDirector,
  setMovieFormYearReleased,
  setMovieFormColor,
}) {
  function handleChange(e, setState) {
    setState(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Title
        <input
          value={movies.movieTitle}
          type="text"
          onChange={(e) => handleChange(e, setMovieTitle)}
        />
      </label>
      <label>
        Director
        <input
          value={movies.movieFormDirector}
          type="text"
          onChange={(e) => handleChange(e, setMovieFormDirector)}
        />
      </label>
      <label>
        Year Released
        <input value={movies.movieFormYearReleased}
          type="text"
          onChange={(e) => handleChange(e, setMovieFormYearReleased)}
        />
      </label>
      <label>
        Color
        <select onChange={(e) => handleChange(e, setMovieFormColor)}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
        </select>
      </label>
    </form>
  );
}
