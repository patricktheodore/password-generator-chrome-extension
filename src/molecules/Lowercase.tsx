import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Lowercase: React.FC = () => {
    return (
        <>
            <Checkbox name={'lowercase'} value={'abcdefg'} />
            <InputLabel name={"lowercase"} htmlFor={'lowercase'} />
        </>
    )
}

export default Lowercase