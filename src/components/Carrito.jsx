import React from "react";

import { useCarrito } from "../context/CarritoContex";

export default function Carrito({ cerrar }) {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalProductos } =
    useCarrito();

  console.log(carrito);

  const enviar = () => {
    alert(`Se a inviado correctamente tus productos 
total : ${totalProductos}`);
  };
  return (
    <>
      <div
        onClick={cerrar}
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#c2b19f] rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 "
        >
          <div className="flex items-center justify-center mb-6">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
              alt="carrito"
            />
            <p className="text-[#81461c] mx-4 text-2xl font-bold">
              Tus reservas ({totalProductos})
            </p>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
              alt="carrito"
            />
          </div>
          {carrito.length === 0 ? (
            <p className="text-center text-gray-700 text-lg">
              Tu carrito está vacío
            </p>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {carrito.map((producto) => (
                  <div
                    key={producto.id}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg"
                  >
                    <img
                      src={producto.image_url}
                      alt={producto.name}
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">
                        {producto.name}
                      </h3>
                      <p className="text-gray-600">
                        Cantidad: {producto.cantidad}
                      </p>
                      <p className="text-orange-600 font-semibold">
                        ${producto.price} c/u
                      </p>
                    </div>

                    <button
                      onClick={() => eliminarDelCarrito(producto.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#81461c]">
                <button
                  onClick={vaciarCarrito}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                  Vaciar carrito
                </button>

                <button
                  onClick={enviar}
                  className="bg-[#81461c] hover:bg-[#6d3a17] text-white py-2 px-6 rounded"
                >
                  Enviar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
