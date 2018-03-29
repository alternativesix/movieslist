import * as React from 'react';
import MovieForm from '../component';

interface StateType {
  title: string;
  description: string;
}

export default class MovieFormContainer extends React.PureComponent<{}, StateType> {
  state = {
    title: '',
    description: ''
  };

  updateField = (fieldName: 'title' | 'description') =>
    (value: string) => { this.setState((state) => ({ ...state, [fieldName]:  value })); }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { updateField, onSubmit } = this;
    return (
      <MovieForm
        onSubmit={onSubmit}
        onTitleChange={updateField('title')}
        onDescriptionChange={updateField('description')}
      />
    );
  }
}
