"use client"
import React, { useState, useEffect } from "react";

export default function TypingEffect() {
  const text = "Introducción a la Ingeniería"; // Texto a escribir
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0; // Índice para recorrer el texto
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Agregar letra por letra
        index++;
      } else {
        clearInterval(interval); // Detener el intervalo cuando termina el texto
      }
    }, 100); // Velocidad de escritura

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [text]);

  return (
    <h1 className="text-4xl font-bold text-white drop-shadow-md">
      {displayedText}
    </h1>
  );
}
