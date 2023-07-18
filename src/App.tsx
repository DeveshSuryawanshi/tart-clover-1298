import React from 'react';
import './App.css';
import { MainRoutes } from './NavBar/MainRoutes';
import {NavBar} from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
