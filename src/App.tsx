import React from 'react';
import './App.css';
import { MainRoutes } from './NavBar/MainRoutes';
import {Navbar} from "./NavBar/NavBar";
import { Footer } from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
