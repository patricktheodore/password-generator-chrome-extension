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
        <div className='flex flex-col'>
            <InputLabel name={'Length'} htmlFor={'length'} value={length}/>
            <input 
            type="range" 
            id="length" 
            name="length" 
            min="8" 
            max="64" 
            className='mx-12 mb-4 mt-2 form-range' 
            value={length} 
            onChange={ (e) => {handleChange(e.target.value)}} />
        </div>
    )
}

export default Length





// has input label for length (length will display the current value of the slider)
// underneath has range slider, which onChange will update the value, or call setValue

