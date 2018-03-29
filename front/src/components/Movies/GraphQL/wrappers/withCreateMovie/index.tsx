import * as React from 'react';
import { Mutation, OperationVariables } from 'react-apollo';
import { CREATE_MOVIE, GET_MOVIES } from '../../queries';

interface InjectedProps {
  saveMovie: (options: { variables: OperationVariables }) => void;
  error?: {};
}

const withCreateMovie = <TOriginalProps extends {}>(
  Component: (React.ComponentType<TOriginalProps & InjectedProps>)
  ) => (
  <Mutation mutation={CREATE_MOVIE}>
  {
    (createMovie, { data, error }) => {
      const saveMovie = (options: { variables: OperationVariables }) => {
        const { variables } = options;
        createMovie({ variables: { ...variables }, refetchQueries: [ { query: GET_MOVIES }] });
      };

      return(<Component saveMovie={saveMovie} error={error && error.message} />);
    }}
  </Mutation>
);

export default withCreateMovie;
