import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function formulario(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log(email);
    console.log(password);
    try {
      const respuesta = await fetch(
        "https://api-funval-g6.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await respuesta.json();
      localStorage.setItem("token", data.access_token);
      navigate("/home");
    } catch (erro) {
      setError(erro.message);
    } finally {
      setLoading(false);
    }
  }

  const nuevo = () => {
    navigate("/newuser");
  };

  return (
    <div className="h-screen w-full bg-cover bg-center flex items-center justify-center relative bg-[url(/geminis.png)]">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 bg-[#decdbb] bg-opacity-90 p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Iniciar Sesión
        </h2>

        <form onSubmit={formulario} className=" flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
              placeholder="ejemplo@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-900 transition"
          >
            Entrar
          </button>
          <p
            onClick={nuevo}
            className="text-sm w-full flex  justify-center cursor-pointer"
          >
            ¿Ya tiene cuenta?
          </p>
        </form>
      </div>
    </div>
  );
}
