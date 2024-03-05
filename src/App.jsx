import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";
import RecipeDetails from "./Pages/RecipeDetails";
import Err404 from "./Pages/Err404";
import Contact from "./Pages/Contact";
import Add from "./Pages/Add";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/:id" element={<RecipeDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
