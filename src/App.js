import React from 'react';
import Juego from './components/Juego';
import Header from './components/Header';

function App() {

  return(
    <>
      <div className="my-5 mx-10 md:mx-auto md:w-2/5">
        <Header/>
        <Juego/>
      </div>
    </>
  );
  
}

export default App;
