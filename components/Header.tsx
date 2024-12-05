"use client"

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 p-6 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href={'/'} className="text-white text-2xl font-semibold">
          Mi Proyecto
        </Link>
        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-10">
          <Link
            href="/parciales/primerParcial"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Primer Parcial
          </Link>
          <Link
            href="/parciales/segundoParcial"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Segundo Parcial
          </Link>
          <Link
            href="/parciales/tercerParcial"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Tercer Parcial
          </Link>
        </div>
        {/* Botón para pantallas pequeñas */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </nav>
      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link
            href="/parciales/primerParcial"
            className="block text-white hover:text-blue-400 transition-colors"
          >
            Primer Parcial
          </Link>
          <Link
            href="/parciales/segundoParcial"
            className="block text-white hover:text-blue-400 transition-colors"
          >
            Segundo Parcial
          </Link>
          <Link
            href="/parciales/tercerParcial"
            className="block text-white hover:text-blue-400 transition-colors"
          >
            Tercer Parcial
          </Link>
        </div>
      )}
    </header>
  );
}
