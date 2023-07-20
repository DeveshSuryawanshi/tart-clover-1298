import React from 'react';
import './App.css';
import { MainRoutes } from './NavBar/MainRoutes';
import {NavBar} from "./NavBar/NavBar";
// import ReusebaleCalculator from './pages/Calculator/ReusebaleCalculator';
import SaleryTex from './pages/Calculator/SaleryTex';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
