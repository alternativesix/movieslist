import * as React from 'react';
import Movie from '../Movie';
import withUpdateMovie from '../GraphQL/mutations/withUpdateMovie';
import MovieForm from '../MovieForm';
import './styles.css';

const UpdateMovieForm = withUpdateMovie(MovieForm);

export default function EditableMovie(props: Movie) {
  return(
    <div className="EditableMovie-Wrapper">
      <Movie {...props} />
      <UpdateMovieForm {...props} movieId={props.id}/>
    </div>
  );
}
