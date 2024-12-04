import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const branches = [
    {
      title: "Ingeniería Militar",
      image: "/images/military-engineering.jpg",
      subfields: [
        "Ingeniería en maquinaria de asedio",
        "Ingeniería en politécnica militar",
        "Ingeniería en armamento",
        "Ingeniería balística",
        "Ingeniería naval",
      ],
    },
    {
      title: "Ingeniería Mecánica",
      image: "/images/mechanical-engineering.jpg",
      subfields: [
        "Ingeniería en mantenimiento mecánico",
        "Ingeniería electromecánica",
        "Ingeniero automotriz",
        "Ingeniería mecánica",
        "Ingeniería en climatización",
        "Ingeniería nanotecnología",
        "Ingeniería aeronáutica",
        "Ingeniería mecatrónica",
      ],
    },
    {
      title: "Ingeniería en Sistemas",
      image: "/images/systems-engineering.webp",
      subfields: [
        "Ingeniería en sistemas computacionales",
        "Ingeniería en sistemas de información",
        "Ingeniería en computación",
        "Ingeniería en multimedia",
        "Ingeniería de telecomunicaciones",
        "Ingeniería de software",
        "Ingeniería informática",
      ],
    },
    {
      title: "Ingeniería Biológica",
      image: "/images/biological-engineering.webp",
      subfields: [
        "Ingeniería técnica forestal",
        "Ingeniería de alimentos",
        "Ingeniería biométrica",
        "Ingeniería agroforestal",
        "Ingeniería de montes",
        "Ingeniería bioquímica",
        "Ingeniería genética",
        "Ingeniería biológica",
        "Ingeniería agrícola",
        "Bioingeniería",
      ],
    },
    {
      title: "Ingeniería Civil",
      image: "/images/civil-engineering.webp",
      subfields: [
        "Ingeniería en transporte",
        "Ingeniería del petróleo",
        "Ingeniería electrónica",
        "Ingeniería ambiental",
        "Ingeniería de minas",
        "Agrimensura",
        "Ingeniería estructural",
        "Ingeniería hidráulica",
        "Ingeniería geológica",
        "Ingeniería sanitaria",
        "Ingeniería agrícola",
        "Ingeniería civil",
      ],
    },
    {
      title: "Ingeniería Eléctrica",
      image: "/images/electrical-engineering.avif",
      subfields: [
        "Ingeniería de telecomunicaciones",
        "Ingeniería electromecánica",
        "Ingeniería de la energía",
        "Ingeniería eléctrica",
        "Ingeniería electrónica",
        "Ingeniería de control",
        "Ingeniería biónica",
      ],
    },
    {
      title: "Ingeniería Química",
      image: "/images/chemical-engineering.png",
      subfields: [
        "Ingeniería agroindustrial",
        "Ingeniería de materiales",
        "Ingeniería petroquímica",
        "Ingeniería de alimentos",
        "Ingeniería química",
        "Ingeniería agrícola",
      ],
    },
    {
      title: "Ingeniería Industrial",
      image: "/images/industrial-engineering.jpg",
      subfields: [
        "Ingeniería de producción",
        "Ingeniería administrativa",
        "Ingeniería de la energía",
        "Ingeniería del producto",
        "Ingeniería de sonido",
        "Ingeniería industrial",
        "Ingeniería comercial",
        "Ingeniería financiera",
        "Ingeniería logística",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-gray-900 text-white">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Ramas de la Ingeniería</h1>
        <p className="text-lg">
          Descubre las principales ramas de la ingeniería y sus diversas aplicaciones en el mundo moderno.
        </p>
      </header>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <Image
                src={branch.image}
                alt={branch.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">{branch.title}</h3>
              <ul className="list-disc pl-6 text-left text-gray-300">
                {branch.subfields.map((subfield, i) => (
                  <li key={i} className="text-sm mb-2">
                    {subfield}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ética y Tecnología */}
      {/* Ética y Tecnología */}
<section className="max-w-6xl mx-auto px-6 py-10 bg-gray-800 rounded-lg shadow-lg">
  <h2 className="text-3xl font-semibold mb-4">Ética y Tecnología</h2>
  <div className="flex flex-col lg:flex-row items-center">
    <Image
      src="/images/ethics-technology.jpg"
      alt="Ética y Tecnología"
      width={600}
      height={400}
      className="rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-6"
    />
    <p className="text-lg">
      La ética en la ingeniería y la tecnología es crucial para asegurar que el desarrollo tecnológico 
      beneficie a la sociedad mientras se minimizan los impactos negativos. Temas como la privacidad, 
      la sostenibilidad y la equidad son esenciales para guiar la innovación de manera responsable.
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <Link href="/">
          Regresar al inicio
        </Link>
      </footer>
    </div>
  );
}
