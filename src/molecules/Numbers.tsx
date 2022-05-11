import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { getFormValues, toggleNumbers } from '../templates/Form/formSlice';
import { useAppSelector } from '../app/hooks';

const Numbers: React.FC = () => {

    const state = useAppSelector(getFormValues)
    const numberState = state.numbers

    return (
        <div className='grid-col-12'>
            <Checkbox name={'numbers'} checkedStatus={numberState} action={toggleNumbers}/>
            <InputLabel name={"numbers"} htmlFor={'numbers'} />
        </div>
    )
}

export default Numbers