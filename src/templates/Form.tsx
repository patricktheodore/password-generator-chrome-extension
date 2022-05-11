import React, { useState } from 'react';
import Lowercase from '../molecules/Lowercase';
import Numbers from '../molecules/Numbers';
import Special from '../molecules/Special';
import Uppercase from '../molecules/Uppercase';
import GenerateButton from '../atoms/GenerateButton';

const Form = () => {

    const [chars, setChars] = useState<string>('');

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