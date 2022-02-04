import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, deleteMovieHandler }) {
  return <div>
    {
      movies.map((movie, i) => <Movie key={`${movie.title}-${i}`} {...movie} deleteMovieHandler={deleteMovieHandler} />)
    }
  </div>;
}
