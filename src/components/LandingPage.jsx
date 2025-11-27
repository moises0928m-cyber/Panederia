import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const irLogin = () => {
    navigate("/login");
  };

  return (
    <main className="relative flex justify-center items-center grow">
      <img
        src="/panaderos.png"
        alt="Panaderos"
        className="
          w-full 
          h-[calc(100vh-64px-96px)] object-cover
          sm:h-[calc(100vh-72px-96px)] 
          lg:h-[calc(100vh-64px-96px)] 
          2xl:h-[calc(100vh-64px-96px)] 
        "
      />

      <div
        className="
          absolute inset-0 flex justify-center items-center px-4
          translate-y-[20%]    
          sm:translate-y-[20%] 
          lg:translate-y-[10%] 
          pointer-events-none
        "
      >
        <div className="bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl max-w-md p-6 sm:p-8 flex flex-col items-center text-center space-y-6 pointer-events-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
            Nuestra Historia
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg">
            Desde hace más de 30 años, nuestra panadería ha mantenido la
            tradición de hornear con amor y dedicación. Cada pan es elaborado a
            mano, con ingredientes seleccionados para ofrecer frescura y sabor
            auténtico.
          </p>

          <button
            onClick={irLogin}
            className="mt-4 bg-[#B86832] text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:bg-[#E89A4C] transition"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </main>
  );
}
