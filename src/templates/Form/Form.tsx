import React, { useState } from 'react';
import Lowercase from '../../molecules/Lowercase';
import Numbers from '../../molecules/Numbers';
import Special from '../../molecules/Special';
import Uppercase from '../../molecules/Uppercase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFormValues, resetChars, updateChars, setPassword } from './formSlice';
import PasswordDisplay from '../../atoms/PasswordDisplay';


const Form:React.FC = () => {
  const LOWERCASE: string = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS: string = '1234567890';
  const SPECIAL: string = `!"#$%&'()*+,-./:;<=>?@[}^_{|}~`;

  const dispatch = useAppDispatch();
  const state = useAppSelector(getFormValues);

  const handleSubmit = () => {
    dispatch(resetChars())
    addChars()
    handleGenerate()
    console.log(state.availChars);
  }

  const addChars = () => {
    if (state.lowercase === true) {
      dispatch(updateChars(LOWERCASE))
    }

    if (state.uppercase === true) {
      dispatch(updateChars(UPPERCASE))
    }

    if (state.numbers === true) {
      dispatch(updateChars(NUMBERS))
    }

    if (state.special === true) {
      dispatch(updateChars(SPECIAL))
    }
  }

  const handleGenerate = () => {
    let password: string = ''
    console.log(state.availChars, state.password);

    // for (var i = 0; i < state.availChars.length; i++) {
    //   password += state.availChars.charAt(Math.floor(Math.random() * parseInt(state.length)))
    // }
    // dispatch(setPassword(password));
  }


  return (
    <>
      <Lowercase />
      <Uppercase />
      <Numbers />
      <Special />
      <button type='button' onClick={() => { handleSubmit() }}>
        Generate Password
      </button>
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