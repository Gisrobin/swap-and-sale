import React from 'react';
import Signin from './Components/Signin';
import Dashboard from './context/dashboard';
import { Route } from 'react-router-dom';


import Signin from './Component';
import './index.css';
function App() {
  return (
    <>
      <Signin/>
      <Dashboard/>
    </>
  );
}
export default App;