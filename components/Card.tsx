import Link from "next/link";
import React from "react";

interface CardProps {
  image: string;  // URL de la imagen
  titulo: string;   // Texto del card
  text: string;   // Texto del card
  link: string;   // Enlace del botón
}

export default function Card({ image, text, link, titulo }: CardProps) {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Imagen con borde suave y efecto de zoom */}
      <div className="relative">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-48 object-cover rounded-t-xl transform transition-transform duration-500 hover:scale-110"
        />
        {/* Efecto de sombra sutil sobre la imagen */}
        <div className="absolute inset-0 bg-black opacity-20 rounded-t-xl"></div>
      </div>

      {/* Contenido */}
      <div className="p-4 space-y-3 text-center">
          <h3 className="text-xl font-medium text-gray-900">{titulo}</h3>
          <p className="text-sm font-medium text-gray-900 mb-10">{text}</p>
        <Link
          href={link}
          target="_blank"
          className="mt-10 inline-block px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg shadow-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
