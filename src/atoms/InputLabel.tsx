import React from 'react';

interface LabelProps {
  name: string;
  htmlFor?: string;
  value?: string;
}

const InputLabel: React.FC<LabelProps> = ({ name, htmlFor, value }) => {
  return (
    <label htmlFor={htmlFor}>
      {name} {value ? (<span>({value})</span>) : ('')}
    </label>
  )
}

export default InputLabel