import * as React from 'react';
import MovieForm from '../component';

interface StateType {
  title: string;
  description: string;
}

type Props = {
  saveMovie: (options: { variables: {} }) => void,
  error?: string,
  title?: string
  description?: string
};

export default class MovieFormContainer extends React.PureComponent<Props, StateType> {
  state = {
    title: this.props.title || '',
    description: this.props.description || ''
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
    const { error, title, description } = this.props;
    return (
      <MovieForm
        onSubmit={onSubmit}
        error={error}
        title={title}
        description={description}
        onTitleChange={updateField('title')}
        onDescriptionChange={updateField('description')}
      />
    );
  }
}
