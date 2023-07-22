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

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/blogs" element={<Blogs />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/faq" element={<Faq />} />
      {/* Calculator Routes */}
      <Route path="/SalaryTax" element={<SaleryTex />} />
      <Route path="/TaxRefund" element={""} />
      <Route path="/RetirementLumpSum" element={""} />
      <Route path="/TravelDeduction" element={""} />
      <Route path="/CapitalGainsTax" element={""} />
      <Route path="/MedicalAidCredits" element={""} />
      <Route path="/WearTear" element={""} />
      <Route path="/RetirementSavings" element={""} />
      <Route path="/HomeofficeCalculator" element={<HomeOfficeCalculator />} />
    </Routes>
  );
};
