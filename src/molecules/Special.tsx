import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { toggleSpecial } from '../templates/Form/formSlice';

const Special: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'special'} value={'1234567890'} action={toggleSpecial}/>
            <InputLabel name={"special"} htmlFor={'special'} />
        </div>
    )
}

export default Special