import * as React from 'react';
import Movie from '../Movie';

import './styles.css';

export default function MoviesList({ movies}: { movies: Movie[] }) {
  return (
    <div className="MoviesList"> {
      movies.map(movie =>
        <Movie key={movie.id} title={movie.title} description={movie.description} />)
      }
    </div>
  );
}
