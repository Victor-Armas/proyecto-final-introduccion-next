import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-gray-900 text-white">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Revoluciones Industriales y la Era 4.0</h1>
        <p className="text-lg">
          Un recorrido por las transformaciones tecnológicas que han moldeado nuestra sociedad.
        </p>
      </header>

      {/* Tercera Revolución Industrial */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-4">Tercera Revolución Industrial</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src="/images/third-industrial-revolution.webp"
            alt="Tercera Revolución Industrial"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="lg:ml-6 text-lg mt-6 lg:mt-0">
            La Tercera Revolución Industrial marcó el inicio de la digitalización, introduciendo 
            computadores, semiconductores y redes de comunicación que transformaron los sistemas productivos y nuestra vida cotidiana.
          </p>
        </div>
      </section>

      {/* Infografía de los computadores */}
      <section className="max-w-6xl mx-auto px-6 py-10 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Computadores a Través del Tiempo</h2>
        <Image
          src="/images/computer-timeline.jpg"
          alt="Infografía de la Línea de Tiempo de los Computadores"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg mx-auto"
        />
        <p className="mt-4 text-center text-lg">
          Desde las primeras máquinas de cálculo hasta los sistemas avanzados de inteligencia artificial, los computadores han evolucionado significativamente, 
          redefiniendo cómo trabajamos, nos comunicamos y resolvemos problemas.
        </p>
      </section>

      {/* Cuarta Revolución Industrial */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-4">Cuarta Revolución Industrial</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src="/images/fourth-industrial-revolution.jpg"
            alt="Cuarta Revolución Industrial"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="lg:ml-6 text-lg mt-6 lg:mt-0">
            En la Cuarta Revolución Industrial, tecnologías como la inteligencia artificial, el internet de las cosas (IoT) y la robótica están 
            transformando las industrias en ecosistemas digitales interconectados.
          </p>
        </div>
      </section>

      {/* Titanes de la Industria 4.0 */}
      <section className="max-w-6xl mx-auto px-6 py-10 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Titanes de la Industria 4.0</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Amazon",
              logo: "/images/amazon-logo.png",
              description: "Líder en automatización y logística avanzada gracias a su red de almacenes inteligentes y sistemas de IA.",
            },
            {
              name: "Tesla",
              logo: "/images/tesla-logo.jpg",
              description: "Pionera en vehículos eléctricos y energía sostenible, impulsando la transformación hacia un futuro más limpio.",
            },
            {
              name: "Google",
              logo: "/images/google-logo.png",
              description: "Desarrollador de tecnologías clave en inteligencia artificial, aprendizaje automático y big data.",
            },
            {
              name: "Microsoft",
              logo: "/images/microsoft-logo.webp",
              description: "Proveedor de soluciones de nube inteligente y herramientas para la transformación digital.",
            },
            {
              name: "Apple",
              logo: "/images/apple-logo.png",
              description: "Innovador en diseño y tecnología, redefiniendo dispositivos personales y ecosistemas digitales.",
            },
          ].map((company) => (
            <div
              key={company.name}
              className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} Logo`}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-xl font-bold">{company.name}</h3>
              <p className="text-center text-sm mt-2">{company.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <Link href="/parciales/tercerParcial">
          Siguiente Parcial
        </Link>
      </footer>
    </div>
  );
}
