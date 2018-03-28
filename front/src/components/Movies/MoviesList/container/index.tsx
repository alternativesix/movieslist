import * as React from 'react';
import MoviesList from '../component';

// type State = {
//   loaded: boolean,
//   movies?: Movie[]
// };

// export default class MoviesListContainer extends React.Component<{}, State> {
//   state = {
//     loaded: false,
//     movies: []
//   };

//   render() {
//     const { loaded, movies } = this.state;
//     if (!loaded) { return(<div> loading... </div>); }
//     return(<MoviesList movies={movies} />);
//   }
// }

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
