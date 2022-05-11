import React, { useState } from 'react';
import './App.css';

import Header from './templates/Header';
import Length from './molecules/Length';
import Form from './templates/Form';
import PasswordDisplay from './atoms/PasswordDisplay';

const App: React.FC = () => {

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
