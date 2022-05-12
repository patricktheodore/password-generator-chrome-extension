import React, { useState } from 'react';
import './App.css';
import Header from './templates/Header';
import Length from './molecules/Length';
import Form from './templates/Form/Form';
import Footer from './templates/Footer';

const App: React.FC = () => {

  return (
    <div>
      <Header />
      <div className='flex justify-center grid-cols-12 gap-4'>
        <Length />
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default App;

