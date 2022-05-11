import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Uppercase: React.FC = () => {
    return (
        <div className='grid-col-12'>
            <Checkbox name={'uppercase'} value={'ABCDEFG'} />
            <InputLabel name={"uppercase"} htmlFor={'uppercase'} />
        </div>
    )
}

export default Uppercase