import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { toggleNumbers } from '../templates/Form/formSlice';

const Numbers: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'numbers'} value={'1234567890'} action={toggleNumbers}/>
            <InputLabel name={"numbers"} htmlFor={'numbers'} />
        </div>
    )
}

export default Numbers