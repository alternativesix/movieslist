import * as React from 'react';
import EditableMovie from '../../EditableMovie';

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
          <EditableMovie {...movie} />
        </div>
          )
      }
    </div>
  );
}
