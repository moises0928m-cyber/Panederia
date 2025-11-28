import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nuevo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function crear(e) {
    e.preventDefault();

    try {
      const respuesta = await fetch(
        "https://api-funval-g6.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
          }),
        }
      );

      const data = await respuesta.json();

      if (!respuesta.ok) {
        setError(data.message || "Error al crear usuario");
        return;
      }

      alert("Usuario creado correctamente ✔");

      navigate("/login", { replace: true });
    } catch (err) {
      setError("Error al conectarse con el servidor");
    }
  }

  return (
    <div className="h-screen w-full bg-[url(/nuevos.png)] bg-no-repeat bg-center bg-cover relative">
      <div className="flex items-center justify-center absolute inset-0 bg-black/20">
        <div className="relative z-10 bg-[#decdbb] bg-opacity-90 p-8 rounded-xl shadow-lg w-80 md:w-100 md:text-3xl md:p-12 ">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Crear Cuenta
          </h2>

          {error && (
            <p className="text-red-600 text-center text-sm mb-2">{error}</p>
          )}

          <form onSubmit={crear} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 md:text-xl">
                Full name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="mt-1 text-xl p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="Ej: Maria Lopez"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 md:text-xl">
                Correo
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-1 text-xl p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="email@gmail.com"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 md:text-xl">
                Contraseña
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="mt-1 text-xl p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="mt-4 text-xl w-full bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-900 transition"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
