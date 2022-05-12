import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Special: React.FC = () => {

    const SPECIAL: string = `!#$%&'()*+,./:;<=>@^_{|}`;

    return (
        <div>
            <Checkbox name={'special'} payload={SPECIAL} />
            <InputLabel name={"Special"} htmlFor={'special'} />
        </div>
    )
}

export default Special