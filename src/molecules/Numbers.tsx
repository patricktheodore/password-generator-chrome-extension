import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Numbers: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'numbers'} value={'1234567890'} />
            <InputLabel name={"numbers"} htmlFor={'numbers'} />
        </div>
    )
}

export default Numbers