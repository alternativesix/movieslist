import * as React from 'react';
import { Mutation, OperationVariables } from 'react-apollo';
import { GET_MOVIES, CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from '../queries';

interface InjectedProps {
  saveMovie: (options: { variables: OperationVariables }) => void;
  loading: boolean;
  error?: {};
}

function withMutation(mutation: any) {
  return <OriginalProps extends {}>(Component: (React.ComponentType<OriginalProps & InjectedProps>)) => {
    return (props: Partial<Movie> & { movieId?: number | string }) => (
      <Mutation mutation={mutation} >
        {
          (saveMovie, { loading, data, error }) => {
            const wrappedSave = (options: { variables: OperationVariables }) => {
              const { variables } = options;
              const { movieId } = props;
              if (!movieId) {
                saveMovie({ variables: { ...variables }, refetchQueries: [ { query: GET_MOVIES }] });
                return;
              }
              saveMovie({ variables: { ...variables, id: movieId }, refetchQueries: [ { query: GET_MOVIES }] });
            };

            return(<Component {...props} loading={loading} saveMovie={wrappedSave} error={error && error.message} />);
          }}
      </Mutation>
    );
  };
}

export const withCreateMovie = withMutation(CREATE_MOVIE);
export const withUpdateMovie = withMutation(UPDATE_MOVIE);
export const withDeleteMovie = withMutation(DELETE_MOVIE);
