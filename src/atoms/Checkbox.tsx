import React from 'react';

interface CheckboxProps {
    name: string,
    value: string
}

const Checkbox:React.FC<CheckboxProps> = ({ name, value }) => {
    return (
            <input type="checkbox" id={name} name={name} value={value}></input>    
    )
}

export default Checkbox
