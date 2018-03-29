import * as React from 'react';
import Input from '../Input';

import './styles.css';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  onTitleChange: (value: string) => void,
  onDescriptionChange: (value: string) => void,
  error?: string
};

export default function MovieForm(
  {
    onSubmit,
    onTitleChange,
    onDescriptionChange,
    error
  }: Props
  ) {
  return (
    <div className="MovieForm">
      <form onSubmit={onSubmit}>
        <Input name="title" onChange={onTitleChange} />
        <Input name="description" onChange={onDescriptionChange} />
        {error && <div className="MovieForm-Errors">{error}</div>}
        <input type="submit" value="Submit" />
      </form>
    </div>
   );
}
