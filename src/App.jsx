import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Home from "./pages/Home";
import Nuevo from "./pages/Nuevo";
import CardCategorias from "./components/CardCategorias";
import ProtectedRoute from "./components/ProtectedRoute";
import { CarritoProvider } from "./context/CarritoContex";
import Contact from "./pages/Contact"; // <-- Agregado

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

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/home/:categoria"
              element={
                <ProtectedRoute>
                  <CardCategorias />
                </ProtectedRoute>
              }
            />

            {/* RUTA PARA CONTACT */}
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}
