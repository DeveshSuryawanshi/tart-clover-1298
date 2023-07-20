import React from 'react';
import './App.css';
import { MainRoutes } from './NavBar/MainRoutes';
import {Navbar} from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
