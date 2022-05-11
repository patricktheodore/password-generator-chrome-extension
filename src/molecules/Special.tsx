import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { getFormValues, toggleSpecial } from '../templates/Form/formSlice';
import { useAppSelector } from '../app/hooks';

const Special: React.FC = () => {

    const state = useAppSelector(getFormValues)
    const specialState = state.special

    return (
        <div className='grid-col-12'>
            <Checkbox name={'special'} checkedStatus={specialState} action={toggleSpecial}/>
            <InputLabel name={"special"} htmlFor={'special'} />
        </div>
    )
}

export default Special