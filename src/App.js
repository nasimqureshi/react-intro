import React, { Components } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcom';

function App() {
  return (
    <div className="App">
   <Greet />
   <Welcome />
    </div>
  );
}

export default App;
