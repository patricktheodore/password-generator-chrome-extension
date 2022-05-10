import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Numbers: React.FC = () => {
    return (
        <>
            <Checkbox name={'numbers'} value={'1234567890'} />
            <InputLabel name={"numbers"} htmlFor={'numbers'} />
        </>
    )
}

export default Numbers