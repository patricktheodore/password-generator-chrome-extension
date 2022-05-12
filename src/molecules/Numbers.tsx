import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Numbers: React.FC = () => {

    const NUMBERS: string = '1234567890';

    return (
        <div className='grid-col-12'>
            <Checkbox name={'numbers'} payload={NUMBERS}/>
            <InputLabel name={"numbers"} htmlFor={'numbers'} />
        </div>
    )
}

export default Numbers