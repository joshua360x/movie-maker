import React from 'react';

export default function Movie({ id, title, director, year, color, deleteMovieHandler }) {
  return (
    <div onClick={() => deleteMovieHandler && deleteMovieHandler(id)}>
      <h4>Title: {title}</h4>
      <p>Director: {director}</p>
      <p>Year Released: {year}</p>
      <p>Color: {color}</p>
    </div>
  );
}
