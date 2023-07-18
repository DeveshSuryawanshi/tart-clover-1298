import React from "react";
import { Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/about" element={<h1>About</h1>}/>
      <Route path="/login" element={<h1>Login</h1>}/>
    </Routes>
  );
};
