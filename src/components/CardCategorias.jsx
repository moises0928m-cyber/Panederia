import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../context/CarritoContex";

export default function CardCategorias() {
  const { categoria } = useParams();
  const [pan, setPan] = useState(null);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch(
      `https://api-funval-g6.onrender.com/products/?skip=0&limit=100&category=${categoria}`
    )
      .then((res) => res.json())
      .then((data) => setPan(data));
  }, [categoria]);

  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    alert(`${producto.name}agregado al carrito`);
  };

  return (
    <>
      <div className="bg-[url(/card.png)] w-full h-screen bg-no-repeat bg-center bg-cover relative ">
        <div className=" absolute inset-0 bg-black/20 w-full ">
          <div className=" h-screen bg-opacity-90 p-8 rounded-xl shadow-lg w-full flex justify-evenly overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6  place-items-center ">
              {pan?.map((pan, i) => (
                <div
                  key={i}
                  className=" w-80 rounded-md bg-[#decdbb]  shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#decdbb]  overflow-hidden"
                >
                  <div className="w-full h-40 overflow-hidden ">
                    <img
                      src={pan.image_url}
                      alt={pan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <h5 className="font-bold text-gray-800  w-full flex justify-center ">
                      {pan.name}
                    </h5>

                    <div className="flex  space-x-1 w-full justify-evenly ">
                      <span className="text-xl">Precio: ${pan.price}</span>
                      <button onClick={() => handleAgregar(pan)}>
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
                          alt="shopping-cart--v1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
