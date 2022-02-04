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
          value={movies.title}
          type="text"
          onChange={(e) => handleChange(e, setMovieTitle)}
        />
      </label>
      <label>
        Director
        <input
          value={movies.director}
          type="text"
          onChange={(e) => handleChange(e, setMovieFormDirector)}
        />
      </label>
      <label>
        Year Released
        <input value={movies.year}
          type="text"
          onChange={(e) => handleChange(e, setMovieFormYearReleased)}
        />
      </label>
      <label>
        Color
        <select onChange={(e) => handleChange(e, setMovieFormColor)}>
          <option selected value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
        </select>
      </label>
      <button>Submit Movie</button>
    </form>
  );
}
