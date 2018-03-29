import * as React from 'react';
import Input from '../Input';

import './styles.css';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  onTitleChange: (value: string) => void,
  onDescriptionChange: (value: string) => void,
  errors?: {
    title?: string,
    description?: string
  }
};

export default function MovieForm(
  {
    onSubmit,
    onTitleChange,
    onDescriptionChange,
    errors
  }: Props
  ) {
  return (
    <div className="MovieForm">
      <form onSubmit={onSubmit}>
        <Input name="title" onChange={onTitleChange} error={errors && errors.title} />
        <Input name="description" onChange={onDescriptionChange} error={errors && errors.description} />
        <input type="submit" value="Submit" />
      </form>
    </div>
   );
}
