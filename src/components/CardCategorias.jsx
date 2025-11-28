import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../context/CarritoContex";
import { useModal } from "../hooks/useModal";
import Contador from "./Contador";

export default function CardCategorias() {
  const { abrir, open, cerrar } = useModal();
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

                    <div className="flex  space-x-1 w-full justify-around ">
                      <span className="text-xl">Precio: ${pan.price}</span>
                      <div className="flex flex-row gap-4 ">
                        <div className="w-10  flex justify-end">
                          {open === pan.id ? (
                            <>
                              <img
                                onClick={cerrar}
                                width="25"
                                height="25"
                                src="https://img.icons8.com/color/48/ok--v1.png"
                                alt="ok--v1"
                              />
                              <Contador cerrar={cerrar} producto={pan} />
                            </>
                          ) : (
                            <>
                              <img
                                onClick={() => {
                                  agregarAlCarrito(pan), abrir(pan.id);
                                }}
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
                                alt="shopping-cart--v1"
                              />
                            </>
                          )}
                        </div>
                      </div>
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
