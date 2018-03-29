import * as React from 'react';
import { withDeleteMovie } from '../GraphQL/wrapper';

function MovieRemover({ movieId, saveMovie }:
  { movieId: number | 'string', saveMovie: (options: { variables: {} }) => void }
) {
  return (
    <div>
      <button onClick={() => saveMovie({ variables: {} })}>Delete</button>
    </div>
  );
}

export default withDeleteMovie(MovieRemover);
