import React, { useState } from 'react';
import './App.css';
import Header from './templates/Header';
import Length from './molecules/Length';
import Form from './templates/Form/Form';
import PasswordDisplay from './atoms/PasswordDisplay';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggleLowercase, toggleNumbers, toggleSpecial, toggleUppercase, getFormValues } from './templates/Form/formSlice'
import { getRoles } from '@testing-library/react';


const App: React.FC = () => {

  const passwordCriteria = useAppSelector(getFormValues);

  console.log(passwordCriteria);
  

  return (
    <div>
      <Header />
      <div className='flex justify-center grid-cols-12 gap-4'>
        <Length />
        <Form />
      </div>
      <PasswordDisplay value={'hellllllllohellllllllohellllllllohellllllllohellllllllohellllllllo'}/>
    </div>
  )
}

export default App;

// const [chars, setChars] = useState<string[]>([]);

// form needs to output chars

// then select a random character *length

// then post it to field at the button
