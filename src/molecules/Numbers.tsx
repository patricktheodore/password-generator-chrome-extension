import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';

const Numbers: React.FC = () => {

    const NUMBERS: string = '1234567890';

    return (
        <div>
            <Checkbox name={'numbers'} payload={NUMBERS}/>
            <InputLabel name={"Numbers"} htmlFor={'numbers'} />
        </div>
    )
}

export default Numbers