import React, { Components } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcom';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
   {/* <Greet />
   <Welcome /> */}
   <Hello />
    </div>
  );
}

export default App;
