import React from 'react';

export default function Movie({ title, director, year, color }) {
  return (
    <div>
      <h3>Movie Stuff</h3>
      <p>Title: {title}</p>
      <p>Director: {director}</p>
      <p>Year Released: {year}</p>
      <p>Color: {color}</p>
    </div>
  );
}
