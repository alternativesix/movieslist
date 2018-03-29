import * as React from 'react';
import MovieForm from '../component';
import withCreateMovie from '../../GraphQL/mutations/CreateMovie';

interface StateType {
  title: string;
  description: string;
}

type Props = {
  saveMovie: (options: { variables: {} }) => void,
  error?: string
};

class MovieFormContainer extends React.PureComponent<Props, StateType> {
  state = {
    title: '',
    description: ''
  };

  updateField = (fieldName: 'title' | 'description') =>
    (value: string) => { this.setState((state) => ({ ...state, [fieldName]:  value })); }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.saveMovie(this.serializeMovie());
  }

  serializeMovie = () => ({ variables: { ...this.state } });

  render() {
    const { updateField, onSubmit } = this;
    const { error } = this.props;
    return (
      <MovieForm
        onSubmit={onSubmit}
        error={error}
        onTitleChange={updateField('title')}
        onDescriptionChange={updateField('description')}
      />
    );
  }
}

export default withCreateMovie()(MovieFormContainer);
