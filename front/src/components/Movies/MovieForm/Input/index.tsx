import * as React from 'react';

import './styles.css';

type Props = {
  name: string,
  onChange: (value: string) => void
};

export default function Input({ name, onChange }: Props) {
  return (
    <div className="MovieForm-Input">
      <input name={name} type="text" onChange={(event) => onChange(event.currentTarget.value)}/>
    </div>
  );
}
