import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "../pages/Blogs/Blogs";
import { Calculator } from "../pages/Calculator/Calculator";
import { Contact } from "../pages/Contact/Contact";
import { Faq } from "../pages/FAQ/Faq";
// import { HomePage } from "../pages/HomePage/HomePage";
import { Login } from "../pages/Login/Login";
import HomePage from "../pages/HomePage/HomePage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/faq" element={<Faq/>}/>
    </Routes>
  );
};
