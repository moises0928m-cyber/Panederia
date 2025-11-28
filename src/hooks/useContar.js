import { useState } from "react";

export function useContar() {
  const [numero, setNumero] = useState(0);

  let sumar = () => {
    setNumero(numero + 1);
  };
  let restar = () => {
    setNumero(numero - 1);
  };

  return { numero, sumar, restar };
}
