import logo from './logo.svg';
import './App.css';
import React, {createContext, useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import Count from './Count';
import Display from './Display';

export const store = createContext();

function App() {

  const [data, setData] = useState(0);

  return (

      <store.Provider value={[data, setData]}>

        <center>

          Hello

          {/* <ComponentA />
          <ComponentB /> */}

          <button onClick={()=> setData(data+1)}> Increment </button>

          <Count />
          <Display />

          
        </center>

  
        </store.Provider>

  );
}

export default App;