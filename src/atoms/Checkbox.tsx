import React from 'react';
import { useAppDispatch } from '../app/hooks';

interface CheckboxProps {
    name: string,
    checkedStatus: boolean
    action: Function
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checkedStatus, action }) => {
    
    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(action())
    }

    return (
        <input type="checkbox" id={name} name={name} checked={checkedStatus} onChange={() => handleChange()}></input>
    )
}

export default Checkbox
