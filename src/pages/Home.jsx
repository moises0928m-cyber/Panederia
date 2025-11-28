import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Categorías</h1>

        <div className="space-y-4">
          <Link
            to="Panaderia-dulce"
            className="block text-2xl text-blue-600 hover:underline"
          >
            Pan dulce
          </Link>

          <Link
            to="Panaderia-galleta"
            className="block text-2xl text-blue-600 hover:underline"
          >
            Pan galleta
          </Link>

          <Link
            to="Panaderia-dona"
            className="block text-2xl text-blue-600 hover:underline"
          >
            Dona
          </Link>
        </div>
      </div>
    </>
  );
}
