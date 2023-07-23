import React from "react";
import { Route, Routes } from "react-router-dom";
import { Calculator } from "../pages/Calculator/Calculator";
import { HomeOfficeCalculator } from "../pages/Calculator/Components/HomeOfficeCalculator";
import SaleryTex from "../pages/Calculator/SaleryTex";
import { Contact } from "../pages/Contact/Contact";
import { Faq } from "../pages/FAQ/Faq";
import BlogPage from '../pages/Blogs/BlogPage';
import { Login } from "../pages/Login/Login";
import HomePage from "../pages/HomePage/HomePage";
import Taxrefund from "../pages/Calculator/TaxRefund";
import Admin from "../pages/Admin/Admin";
import Register from "../pages/Login/Register";

import BlogForm from "../pages/Admin/BlogForm";
import BlogEdit from "../pages/Admin/BlogEdit";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="/admin" element={<Admin />} />
<Route path="/blogForm" element={<BlogForm/>}/>
<Route path="/blog/:id" element={<BlogEdit/>}/>
 

      <Route path="/login" element={<Login />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blogs" element={<BlogPage />} />
      {/* Calculator Routes */}
      <Route path="/SalaryTax" element={<SaleryTex />} />
      <Route path="/TaxRefund" element={<Taxrefund />} />
      <Route path="/RetirementLumpSum" element={""} />
      <Route path="/TravelDeduction" element={""} />
      <Route path="/CapitalGainsTax" element={""} />
      <Route path="/MedicalAidCredits" element={""} />
      <Route path="/WearTear" element={""} />
      <Route path="/RetirementSavings" element={""} />
      <Route path="/HomeofficeCalculator" element={<HomeOfficeCalculator />} />


      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
