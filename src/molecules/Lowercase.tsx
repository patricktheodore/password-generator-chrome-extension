import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { toggleLowercase } from '../templates/Form/formSlice';

const Lowercase: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'lowercase'} value={'abcdefg'} action={toggleLowercase}/>
            <InputLabel name={"lowercase"} htmlFor={'lowercase'} />
        </div>
    )
}

export default Lowercase