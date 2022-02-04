import React from 'react';

export default function MovieForm({ submitHandler, movies, setMovieTitle, setMovieFormDirector }) {

  function handleChange(e, setState) {
    setState(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Title
        <input value={movies.movieTitle} type="text" onChange={(e) => handleChange(e, setMovieTitle)} />
      </label>
      <label>
        Director
        <input value={movies.movieFormDirector} type="text" onChange={(e) => handleChange(e, setMovieFormDirector)} />
      </label>
      <label>
        Year Released
        <input type="text" />
      </label>
      <label>
        Color
        <select>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
        </select>
      </label>
    </form>
  );
}
