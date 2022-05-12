import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Uppercase: React.FC = () => {

    const UPPERCASE: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return (
        <div>
            <Checkbox name={'uppercase'}  payload={UPPERCASE}/>
            <InputLabel name={"Uppercase"} htmlFor={'uppercase'} />
        </div>
    )
}

export default Uppercase