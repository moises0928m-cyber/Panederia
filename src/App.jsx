import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Home from "./pages/Home";
import Nuevo from "./pages/Nuevo";
import CardCategorias from "./components/CardCategorias";
import { CarritoProvider } from "./context/CarritoContex";

export default function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Header />

        <div className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login />} />

            <Route path="/newuser" element={<Nuevo />} />

            <Route path="/home" element={<Home />} />
            {/* Categorias */}
            <Route path="/home/:categoria" element={<CardCategorias />} />
          </Routes>
        </div>

        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}
