import * as React from 'react';
import MoviesList from '../component';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_MOVIES = gql`
  {
    allMovies {
      id
      title
      description
    }
  }
`;

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
