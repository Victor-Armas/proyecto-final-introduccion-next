import Card from "@/components/Card";
import Header from "@/components/Header";
import TypingEffect from "@/components/TypingEffect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="relative flex items-center justify-center min-h-screen">
        {/* Imagen de fondo */}
        <Image
          src="/Fondo.webp"
          alt="Fondo de Introducción a la Ingeniería"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        {/* Contenedor del contenido */}
        <div className="text-center bg-black bg-opacity-50 px-6 py-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <TypingEffect />
          <p className="mt-4 text-lg text-gray-200 drop-shadow-sm">
            Explorando conceptos básicos e innovadores del mundo de la
            ingeniería.
          </p>
          
        </div>
      </div>

      <main>
        <div className="text-center mt-10 py-10 px-6 sm:px-16 md:px-36">
          <h2 className="uppercase font-bold text-4xl">
            Objetivo del proyecto
          </h2>
          <p className="mt-5 text-lg max-w-4xl mx-auto">
            Presentar los aspectos esenciales de la materia de introducción a la
            ingeniería, explorando su origen, su papel durante las revoluciones
            históricas y su evolución a lo largo del tiempo. Además, analizar
            sus fundamentos científicos y tecnológicos, destacando su aplicación
            en el ámbito profesional, y finalmente examinar su impacto y uso en
            el contexto social y laboral.
          </p>
        </div>

        {/* Sección del desarrollador */}
        <div className="flex flex-col md:flex-row py-10 items-center md:items-stretch bg-white">
          {/* Contenedor de la Imagen */}
          <div className="w-full md:w-1/2 max-h-60 flex justify-center mb-6 md:mb-0">
            <Image
              src="/Foto.png"
              alt="Foto del Desarrollador"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Contenedor del Texto */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white w-full md:w-1/2 max-h-60 flex flex-col justify-center items-center text-center p-6 md:p-8 rounded-lg shadow-lg mt-6 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-bold mb-4">
              Victor Jesús Garzón Armas
            </h2>
            <ul className="space-y-2 text-base">
              <li>
                <span className="font-semibold">Carrera:</span> Ing. Sistemas
                Computacionales
              </li>
              <li>
                <span className="font-semibold">Universidad:</span> Universidad
                de Nueva Extremadura (UVNE)
              </li>
              <li>
                <span className="font-semibold">Materia:</span> Introducción a
                la Ingeniería
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de Cards utilizando Grid */}
        <div className="">
          <div className="text-center">
            <h2 className="uppercase font-bold text-4xl pt-10">Parciales</h2>
          </div>
          <div className="flex justify-center px-6 sm:px-12 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
              <Card
                image="/card-inicio.jpeg"
                titulo="Primer Parcial"
                text="En este parcial se abordarán los orígenes de la ingeniería, explorando cómo surgió y se desarrolló dentro de las primeras civilizaciones."
                link="/parciales/primerParcial"
              />
              <Card
                image="/card-segundo.jpg"
                titulo="Segundo Parcial"
                text="Este tema explora la Tercera y Cuarta Revolución Industrial, el impacto de los computadores en la industria, los líderes industriales clave, y la relación entre ciencia, tecnología e ingeniería."
                link="/parciales/segundoParcial"
              />
              <Card
                image="/card-tercer.webp"
                titulo="Tercer Parcial"
                text="Este parcial aborda las principales ramas de la ingeniería y la importancia de la ética en su práctica, destacando cómo los ingenieros deben tomar decisiones responsables en el uso de la tecnología."
                link="/parciales/tercerParcial"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
