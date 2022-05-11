import React, { useState } from 'react';
import Lowercase from '../../molecules/Lowercase';
import Numbers from '../../molecules/Numbers';
import Special from '../../molecules/Special';
import Uppercase from '../../molecules/Uppercase';
import GenerateButton from '../../atoms/GenerateButton';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleLowercase, toggleNumbers, toggleSpecial, toggleUppercase, getFormValues } from './formSlice'

const Form = () => {

  return (
      <>
        <Lowercase />
        <Uppercase />
        <Numbers />
        <Special />
        <GenerateButton />
      </>

  )
}

export default Form