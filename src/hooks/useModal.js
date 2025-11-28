import { useState } from "react";

export function useModal() {
  const [open, setOpen] = useState(null);

  let abrir = (id) => {
    setOpen(id);
  };
  let cerrar = () => {
    setOpen(null);
  };

  return { open, abrir, cerrar };
}
