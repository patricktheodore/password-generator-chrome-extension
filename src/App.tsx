import React, { useState } from 'react';
import './App.css';

import Header from './templates/Header';
import Length from './molecules/Length';
import Lowercase from './molecules/Lowercase';

const App: React.FC = () => {

  return (
    <>
      <Header />
      <div>
        <Length />
        
      </div>

    </>
  )
}

export default App;

// const [chars, setChars] = useState<string[]>([]);

// form needs to output chars

// then select a random character *length

// then post it to field at the button
