import * as React from 'react';
import { Mutation, OperationVariables } from 'react-apollo';
import { UPDATE_MOVIE } from '../../queries';

interface InjectedProps {
  saveMovie: (options: { variables: OperationVariables }) => void;
  error?: {};
}

const withUpdateMovie = <OriginalProps extends {}>(Component: (React.ComponentType<OriginalProps & InjectedProps>)) => {
  return (props: Movie & { movieId: string | number}) => (
    <Mutation mutation={UPDATE_MOVIE}>
    {
      (updateMovie, { data, error }) => {
        const saveMovie = (options: { variables: OperationVariables }) => {
          const { variables } = options;
          updateMovie({ variables: { ...variables, id: props.movieId }});
        };
        return(<Component {...props} saveMovie={saveMovie} error={error && error.message} />);
      }}
    </Mutation>
  );
};

export default withUpdateMovie;
