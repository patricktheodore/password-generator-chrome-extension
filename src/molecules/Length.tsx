import React, { useState } from 'react';
import InputLabel from '../atoms/InputLabel';

const Length:React.FC = () => {
    
    const [value, setValue] = useState<string>('20');
    
    const handleChange = (newValue: string) => {
        setValue(newValue)
    }
    
    return (
        <div className='grid-col-12'>
            <InputLabel name={'Length'} htmlFor={'length'} /><span>({value})</span>
            <input type="range" id="length" name="length" min="8" max="120" className='' value={value} onChange={ (e) => {handleChange(e.target.value)}}></input>
        </div>
    )
}

export default Length





// has input label for length (length will display the current value of the slider)
// underneath has range slider, which onChange will update the value, or call setValue

