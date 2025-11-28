import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <img
        src="/fondo_panaderia.jpg"
        alt="Fondo panadería"
        className="w-full h-screen object-cover"
      />

      <h1
        className="absolute top-6 w-full text-center text-4xl lg:text-6xl font-bold text-white z-20"
        style={{
          WebkitTextStroke: "3px black",
        }}
      >
        Categorías
      </h1>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-6 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <div className="relative bg-black rounded-xl overflow-hidden border-3 border-black h-[150px] lg:h-[750px] shadow-xl shadow-black/60 transition-transform duration-300 active:scale-105 cursor-pointer">
            <img src="/panes.jpg" className="w-full h-full object-cover" />

            <div className="absolute bottom-0 w-full bg-linear-to-t from-black/70 to-transparent p-3 text-center">
              <span
                className="text-white text-4xl font-bold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Panes
              </span>
            </div>
          </div>

          <div className="relative bg-black rounded-xl overflow-hidden border-3 border-black h-[150px] lg:h-[750px] shadow-xl shadow-black/60 transition-transform duration-300 active:scale-105 cursor-pointer">
            <img src="/facturas.jpg" className="w-full h-full object-cover" />

            <div className="absolute bottom-0 w-full bg-linear-to-t from-black/70 to-transparent p-3 text-center">
              <span
                className="text-white text-4xl font-bold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Facturas
              </span>
            </div>
          </div>

          <div className="relative bg-black rounded-xl overflow-hidden border-3 border-black h-[150px] lg:h-[750px] shadow-xl shadow-black/60 transition-transform duration-300 active:scale-105 cursor-pointer">
            <img
              src="/masasfinas.jpeg"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full bg-linear-to-t from-black/70 to-transparent p-3 text-center">
              <span
                className="text-white text-4xl font-bold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Masas Finas
              </span>
            </div>
          </div>

          <div className="relative bg-black rounded-xl overflow-hidden border-3 border-black h-[150px] lg:h-[750px] shadow-xl shadow-black/60 transition-transform duration-300 active:scale-105 cursor-pointer">
            <img src="/Donas.jpg" className="w-full h-full object-cover" />

            <div className="absolute bottom-0 w-full bg-linear-to-t from-black/70 to-transparent p-3 text-center">
              <span
                className="text-white text-4xl font-bold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Donas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
