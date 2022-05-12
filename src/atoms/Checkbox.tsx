import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getFormValues, updateChars } from '../templates/Form/formSlice';

interface CheckboxProps {
    name: string,
    checkedStatus: boolean
    action: Function
    payload: string
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checkedStatus, action, payload }) => {

    const dispatch = useAppDispatch();
    const state = useAppSelector(getFormValues)

    const handleChange = () => {
        dispatch(action())
        dispatch(updateChars(payload))
        console.log(state);
        
    }
    
    return (
        <input type="checkbox" id={name} name={name} checked={checkedStatus} onChange={() => handleChange()}></input>
    )
}

export default Checkbox
