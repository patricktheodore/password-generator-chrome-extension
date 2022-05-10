import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Uppercase: React.FC = () => {
    return (
        <>
            <Checkbox name={'uppercase'} value={'ABCDEFG'} />
            <InputLabel name={"uppercase"} htmlFor={'uppercase'} />
        </>
    )
}

export default Uppercase