import React from 'react';
import InputLabel from '../atoms/InputLabel';
import Checkbox from '../atoms/Checkbox';
import { getFormValues, toggleUppercase } from '../templates/Form/formSlice';
import { useAppSelector } from '../app/hooks';

const Uppercase: React.FC = () => {

    const UPPERCASE: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const state = useAppSelector(getFormValues)
    const uppercaseState = state.uppercase

    return (
        <div className='grid-col-12'>
            <Checkbox name={'uppercase'} checkedStatus={uppercaseState} payload={UPPERCASE} action={toggleUppercase}/>
            <InputLabel name={"uppercase"} htmlFor={'uppercase'} />
        </div>
    )
}

export default Uppercase