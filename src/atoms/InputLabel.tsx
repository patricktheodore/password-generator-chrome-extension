import React from 'react';

interface LabelProps {
    name:  string;
    htmlFor?: string;
    value?: string;
}

const InputLabel:React.FC<LabelProps> = ({ name, htmlFor, value }) => {
  return (
    <label className='' htmlFor={htmlFor}>
        {name}
    </label>
  )
}

export default InputLabel