import React, { useState } from 'react';
import Lowercase from '../../molecules/Lowercase';
import Numbers from '../../molecules/Numbers';
import Special from '../../molecules/Special';
import Uppercase from '../../molecules/Uppercase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFormValues, resetChars, updateChars, setPassword } from './formSlice';
import PasswordDisplay from '../../atoms/PasswordDisplay';
import Button from '../../atoms/Button';


const Form:React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getFormValues);

  return (
    <>
      <Lowercase />
      <Uppercase />
      <Numbers />
      <Special />
      <Button />
      <PasswordDisplay value={state.password} />
    </>
  )
}

export default Form



// because the state is only updating when i press the button
// availChars isn't updating before generating the password
// need to update the state when the checkbox is toggled
// need to move the updateChars logic inside checkbox. 
// might have to use an array.filter method
// and then concat into a string once genPass is called