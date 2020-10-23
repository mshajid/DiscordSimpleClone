import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { selectUser } from "./features/userSlice";
import Login from './Login';



function App() {
  const user = useSelector(selectUser);
  return (
    //BEM Naming Convention CSS Architecture
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
