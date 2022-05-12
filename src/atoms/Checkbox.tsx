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
        <input className='form-check-input mr-4 h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer' 
        type="checkbox" id={name} name={name} onChange={() => handleChange()} />
    )
}

export default Checkbox
