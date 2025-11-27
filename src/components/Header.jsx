import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFF2E0] p-4 shadow-md relative">
      <div className="w-full flex items-center justify-between px-4 relative z-10">
        <img
          src="/logo panaderia.png"
          alt="Logo"
          className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 drop-shadow-md"
        />

        <div className="flex-1 flex justify-center mx-4">
          <h1
            className={`
              text-lg sm:text-xl md:text-2xl lg:text-5xl 2xl:text-6xl
              font-serif italic 
              text-[#6A3A1A]
              drop-shadow-md text-center
              truncate
            `}
          >
            Pan de los Últimos Días
          </h1>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#6A3A1A] focus:outline-none z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden lg:flex space-x-8 text-lg text-[#6A3A1A] z-20">
          <a href="#home" className="hover:text-[#E89A4C] transition">
            Home
          </a>
          <a href="#contact" className="hover:text-[#E89A4C] transition">
            Contact
          </a>
          <a href="#fanpage" className="hover:text-[#E89A4C] transition">
            Redes
          </a>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div
          className={`
            mx-4 mt-4 p-5 rounded-3xl shadow-xl 
            bg-linear-to-b from-[#F4C27F] to-[#E89A4C]
            border border-white/30
            flex flex-col items-center space-y-4 pb-4
            transition-all duration-500 origin-top 
            ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-3"
            }
          `}
        >
          <a
            href="#home"
            className="w-full text-center py-3 px-6 rounded-xl 
                       font-semibold text-white bg-[#B86832] shadow-md
                       hover:bg-white hover:text-[#B86832] transition"
          >
            Home
          </a>
          <a
            href="#contact"
            className="w-full text-center py-3 px-6 rounded-xl 
                       font-semibold text-white bg-[#B86832] shadow-md
                       hover:bg-white hover:text-[#B86832] transition"
          >
            Contact Us
          </a>
          <a
            href="#fanpage"
            className="w-full text-center py-3 px-6 rounded-xl 
                       font-semibold text-white bg-[#B86832] shadow-md
                       hover:bg-white hover:text-[#B86832] transition"
          >
            Fan Page
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
