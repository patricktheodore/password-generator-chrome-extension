import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Special: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'special'} value={'1234567890'} />
            <InputLabel name={"special"} htmlFor={'special'} />
        </div>
    )
}

export default Special