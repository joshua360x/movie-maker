import React from 'react';

export default function Movie({ title, director, year, color }) {
  return (
    <div>
      <h4>Title: {title}</h4>
      <p>Director: {director}</p>
      <p>Year Released: {year}</p>
      <p>Color: {color}</p>
    </div>
  );
}
