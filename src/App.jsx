import React from "react";
import Login from "./components/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Nuevo from "./components/Nuevo";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newuser" element={<Nuevo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
