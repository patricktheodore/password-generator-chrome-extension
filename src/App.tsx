import React, { useState } from 'react';
import './App.css';
import Header from './templates/Header';
import Length from './molecules/Length';
import Form from './templates/Form/Form';
import Footer from './templates/Footer';

const App: React.FC = () => {

  return (
    <div className="flex-col h-max w-72 justify-center align-middle text-center text-white bg-[url('../public/layered-waves-haikei.svg')]">
      <Header />
      <Length />
      <Form />
      <Footer />
    </div>
  )
}

export default App;

