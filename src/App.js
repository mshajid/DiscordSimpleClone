import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM Naming Convention CSS Architecture
    <div className="app">
      <Sidebar />
    </div>
  );
}

export default App;
