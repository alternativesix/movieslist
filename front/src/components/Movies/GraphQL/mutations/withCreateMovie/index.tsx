import * as React from 'react';
import { Mutation, OperationVariables } from 'react-apollo';
import { CREATE_MOVIE } from '../../queries';

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
