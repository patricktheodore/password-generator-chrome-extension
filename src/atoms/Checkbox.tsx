import { AnyAction } from '@reduxjs/toolkit';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getFormValues, toggleLowercase } from '../templates/Form/formSlice';

interface CheckboxProps {
    name: string,
    checkedStatus: boolean
    action: Function
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checkedStatus, action }) => {
    
    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(action())
        console.log(`${name} === ${checkedStatus}`);
        
    }

    return (
        <input type="checkbox" id={name} name={name} checked={checkedStatus} onChange={() => handleChange()}></input>
    )
}

export default Checkbox
