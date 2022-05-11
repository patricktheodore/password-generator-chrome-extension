import React, { useState } from 'react';
import Lowercase from '../../molecules/Lowercase';
import Numbers from '../../molecules/Numbers';
import Special from '../../molecules/Special';
import Uppercase from '../../molecules/Uppercase';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFormValues, resetChars, updateChars, setPassword } from './formSlice';
import PasswordDisplay from '../../atoms/PasswordDisplay';


const Form = () => {
  const LOWERCASE: string = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS: string = '1234567890';
  const SPECIAL: string = `!"#$%&'()*+,-./:;<=>?@[}^_{|}~`;

  const dispatch = useAppDispatch();
  const state = useAppSelector(getFormValues);
  
  const handleSubmit = async () => {    
    dispatch(resetChars())
    addChars()
    handleGenerate()
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
    
    for (var i = 0; i < state.availChars.length; i++) {
      password += state.availChars.charAt(Math.floor(Math.random() * state.availChars.length))
    }
    dispatch(setPassword(password));
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