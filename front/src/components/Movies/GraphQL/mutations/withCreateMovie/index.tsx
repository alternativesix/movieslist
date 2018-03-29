import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation, OperationVariables } from 'react-apollo';

const CREATE_MOVIE = gql`
  mutation createMovie($id: String!, $title: String!, $description: String!) {
    createMovie(id: $id, movie: { title: $title, description: $description }) {
      id
      title
    }
  }
`;

interface InjectedProps {
  saveMovie: (options: { variables: OperationVariables }) => void;
  error?: {};
}

const withCreateMovie = <TOriginalProps extends {}>(
  Component: (React.ComponentType<TOriginalProps & InjectedProps>)
  ) => (
  <Mutation mutation={CREATE_MOVIE}>
  {
    (createMovie, { data, error }) => (
      <Component saveMovie={createMovie} error={error && error.message} />
    )}
  </Mutation>
);

export default withCreateMovie;
