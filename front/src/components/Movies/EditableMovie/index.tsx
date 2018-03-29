import * as React from 'react';
import Movie from '../Movie';
import withUpdateMovie from '../GraphQL/mutations/withUpdateMovie';
import MovieForm from '../MovieForm';

export default class EditableMovie extends React.PureComponent<Movie> {
  UpdateMovieForm = () => {
    const { id } = this.props;
    return withUpdateMovie(id)(MovieForm);
  }

  render() {
    const { UpdateMovieForm, props } = this;
    return(
      <div>
        <Movie {...props} />
        <UpdateMovieForm />
      </div>
    );
  }
}
