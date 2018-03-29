import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation, OperationVariables } from 'react-apollo';

const UPDATE_MOVIE = gql`
  mutation updateMovie($id: String!, $title: String!, $description: String!) {
    updateMovie(id: $id, movie: { title: $title, description: $description }) {
      id
      title
    }
  }
`;

interface InjectedProps {
  saveMovie: (options: { variables: OperationVariables }) => void;
  error?: {};
}

export default function withUpdateMovie(movieId: React.ReactText) {
  return <TOriginalProps extends {}>(Component: (React.ComponentType<TOriginalProps & InjectedProps>)) => (
      <Mutation mutation={UPDATE_MOVIE}>
      {
        (updateMovie, { data, error }) => {
          const saveMovie = (options: { variables: OperationVariables }) => {
            const { variables } = options;
            updateMovie({ variables: { ...variables, id: movieId } });
          };
          return(<Component saveMovie={saveMovie} error={error && error.message} />);
        }}
      </Mutation>
    );
}
