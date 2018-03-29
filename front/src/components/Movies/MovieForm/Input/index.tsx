import * as React from 'react';

interface Props {
  name: string;
  onChange: (value: string) => void;
  defaultValue?: string;
}

export default function Input({ name, onChange, ...rest }: Props) {
  return (
    <div className="MovieForm-Input">
      <input name={name} type="text" onChange={(event) => onChange(event.currentTarget.value)} {...rest}/>
    </div>
  );
}
