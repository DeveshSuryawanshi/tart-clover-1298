import React from 'react';
import './App.css';
import { MainRoutes } from './NavBar/MainRoutes';
import {Navbar} from "./NavBar/NavBar";
// import ReusebaleCalculator from './pages/Calculator/ReusebaleCalculator';
import SaleryTex from './pages/Calculator/SaleryTex';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
