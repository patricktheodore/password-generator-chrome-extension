import React, { useState } from 'react';
import InputLabel from '../atoms/InputLabel';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateLength, getFormValues } from '../templates/Form/formSlice';

const Length:React.FC = () => {
    
    const state = useAppSelector(getFormValues);
    const length = state.length;
    
    const dispatch = useAppDispatch();
    
    const handleChange = (newLength: string) => {
        dispatch(updateLength(newLength))
    }
    
    return (
        <div className='grid-col-12'>
            <InputLabel name={'Length'} htmlFor={'length'} /><span>({length})</span>
            <input type="range" id="length" name="length" min="8" max="120" className='' value={length} onChange={ (e) => {handleChange(e.target.value)}}></input>
        </div>
    )
}

export default Length





// has input label for length (length will display the current value of the slider)
// underneath has range slider, which onChange will update the value, or call setValue

