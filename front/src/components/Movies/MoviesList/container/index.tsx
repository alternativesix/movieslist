import * as React from 'react';
import MoviesList from '../component';
import { Query } from 'react-apollo';

import { GET_MOVIES } from '../../GraphQL/queries';

export default function MoviesListContainer() {
  return(
    <Query query={GET_MOVIES}>
      {
        ({ loading, error, data }) => {
          if (loading) { return(<div>loading...</div>); }
          if (error) { return(<div> {`error: ${error.message}`} </div>); }
          return <MoviesList loading={loading} error={error} movies={data.allMovies} />;
        }}
    </Query>
  );
}
