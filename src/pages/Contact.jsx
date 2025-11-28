import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSent(true);
    }, 500);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <img
        src="/formulario.jpg"
        alt="Formulario"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-20 w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-[#F0D9B5]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#D18B47]">
          Contáctanos
        </h2>

        {sent ? (
          <div className="text-center text-green-600 font-semibold text-xl">
            ✔ Tu mensaje ha sido enviado con éxito
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-[#A0662F]">
                Nombre
              </label>
              <input
                type="text"
                required
                className="w-full p-3 mt-1 border border-[#E5C6A5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E89A4C]"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#A0662F]">
                Correo
              </label>
              <input
                type="email"
                required
                className="w-full p-3 mt-1 border border-[#E5C6A5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E89A4C]"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#A0662F]">
                Mensaje
              </label>
              <textarea
                required
                rows="4"
                className="w-full p-3 mt-1 border border-[#E5C6A5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E89A4C]"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E89A4C] hover:bg-[#D67E2D] text-white font-bold py-3 rounded-lg transition"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
