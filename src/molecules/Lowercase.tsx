import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Lowercase: React.FC = () => {

    const LOWERCASE: string = 'abcdefghijklmnopqrstuvwxyz';

    return (
        <div className='grid-col-12'>
            <Checkbox name={'lowercase'} payload={LOWERCASE}/>
            <InputLabel name={"lowercase"} htmlFor={'lowercase'} />
        </div>
    )
}

export default Lowercase