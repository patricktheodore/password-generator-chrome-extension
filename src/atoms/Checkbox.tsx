import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { updateChars } from '../templates/Form/formSlice';

interface CheckboxProps {
    name: string,
    payload: string
}

const Checkbox: React.FC<CheckboxProps> = ({ name, payload }) => {

    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(updateChars(payload))
    }
    
    return (
        <input type="checkbox" id={name} name={name} onChange={() => handleChange()}></input>
    )
}

export default Checkbox
