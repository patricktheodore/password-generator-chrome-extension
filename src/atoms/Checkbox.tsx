import { AnyAction } from '@reduxjs/toolkit';
import React from 'react';
import { useAppDispatch } from '../app/hooks';

interface CheckboxProps {
    name: string,
    value: string
    action: AnyAction
}

const Checkbox:React.FC<CheckboxProps> = ({ name, value, action }) => {

    const dispatch = useAppDispatch();

    

    return (
            <input type="checkbox" id={name} name={name} value={value} onChange={() => dispatch(action)}></input>    
    )
}

export default Checkbox
