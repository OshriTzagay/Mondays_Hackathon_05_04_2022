import React from 'react';
import './App.css';
import { AppRouter } from './AppRouter';
import Login from './Components/Pages/Login/Login-component';

function App() {
  return (
    <div className="Global-App">
      <AppRouter/>
    </div>
  );
}

export default App;
