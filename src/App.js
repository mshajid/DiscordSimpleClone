import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';


function App() {
  return (
    //BEM Naming Convention CSS Architecture
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
