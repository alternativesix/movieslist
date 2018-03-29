import * as React from 'react';
import Input from '../Input';

import './styles.css';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  onTitleChange: (value: string) => void,
  onDescriptionChange: (value: string) => void,
  error?: string,
  title?: string,
  description?: string,
  loading: boolean
};

export default function MovieForm(
  {
    onSubmit,
    onTitleChange,
    onDescriptionChange,
    error,
    title,
    description,
    loading
  }: Props
  ) {
  return (
    <div className="MovieForm">
      <form onSubmit={onSubmit}>
        <Input name="title" defaultValue={title} onChange={onTitleChange} />
        <Input name="description" defaultValue={description} onChange={onDescriptionChange} />
        {error && <div className="MovieForm-Errors">{error}</div>}
        <input type="submit" value="Submit" disabled={loading} />
      </form>
    </div>
   );
}
