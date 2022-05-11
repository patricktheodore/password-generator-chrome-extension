import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Lowercase: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'lowercase'} value={'abcdefg'} />
            <InputLabel name={"lowercase"} htmlFor={'lowercase'} />
        </div>
    )
}

export default Lowercase