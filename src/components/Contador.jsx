import React from "react";
import { useContar } from "../hooks/useContar";
import { useCarrito } from "../context/CarritoContex";

export default function Contador({ cerrar, producto }) {
  const { agregarAlCarrito, reducirCantidad, carrito } = useCarrito();

  const itemEnCarrito = carrito.find((item) => item.id === producto.id);
  const cantidad = itemEnCarrito ? itemEnCarrito.cantidad : 0;

  const handleSumar = () => {
    agregarAlCarrito(producto);
  };
  const handleRestar = () => {
    if (cantidad > 0) {
      reducirCantidad(producto.id);
      if (cantidad === 0) {
        cerrar();
      }
    }
  };

  return (
    <>
      <div className="w-10 flex gap-2 text-lg ">
        <button className="font-bold" onClick={handleSumar}>
          +
        </button>
        <span>{cantidad}</span>
        <button className="font-bold" onClick={handleRestar}>
          -
        </button>
      </div>
    </>
  );
}
