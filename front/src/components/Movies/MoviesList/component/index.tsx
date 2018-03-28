import * as React from 'react';
import Movie from '../../Movie';

import './styles.css';

type Props = {
  loading: boolean,
  error?: { message: string },
  movies: Movie[]
};

export default function MoviesList({ movies, loading, error }: Props) {
  if (loading) { return(<div>loading...</div>); }
  if (error) { return(<div> {`error: ${error.message}`} </div>); }
  return (
    <div className="MoviesList"> {
      movies.map(movie =>
        <div className="MoviesList-Wrapper" key={movie.id}>
          <Movie title={movie.title} description={movie.description} />
        </div>
          )
      }
    </div>
  );
}
