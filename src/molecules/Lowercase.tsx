import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { toggleLowercase } from '../templates/Form/formSlice';
import { getFormValues } from '../templates/Form/formSlice';
import { useAppSelector } from '../app/hooks';


const Lowercase: React.FC = () => {

    const state = useAppSelector(getFormValues)
    const lowercaseState = state.lowercase;

    return (
        <div className='grid-col-12'>
            <Checkbox name={'lowercase'} checkedStatus={lowercaseState} action={toggleLowercase}/>
            <InputLabel name={"lowercase"} htmlFor={'lowercase'} />
        </div>
    )
}

export default Lowercase