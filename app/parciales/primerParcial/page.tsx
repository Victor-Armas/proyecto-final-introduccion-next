import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-gray-900">
    {/* Header */}
    <header className="text-center py-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Historia de la Ingeniería</h1>
      <p className="text-lg">Explora los comienzos de la ingeniería y su evolución a través de las revoluciones industriales.</p>
    </header>

    {/* Inicios de la ingeniería */}
    <section className="max-w-6xl mx-auto px-6 py-10 text-white">
      <h2 className="text-3xl font-semibold mb-4">Inicios de la Ingeniería</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image src="/engineering-beginnings.jpg" alt="Inicios de la ingeniería" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 lg:ml-6">
          <p className="text-lg mb-4">
            La ingeniería surgió en civilizaciones antiguas como Egipto y Mesopotamia, donde se aplicaron soluciones prácticas en construcción, transporte y sistemas de riego. 
            Los primeros ingenieros utilizaron conocimientos técnicos para resolver desafíos de la vida diaria, marcando el comienzo de una disciplina que evolucionaría enormemente.
          </p>
        </div>
      </div>
    </section>

    {/* Primera Revolución Industrial */}
    <section className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Primera Revolución Industrial</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image src="/images/first-industrial-revolution.jpg" alt="Primera Revolución Industrial" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 lg:ml-6">
          <p className="text-lg mb-4">
            En el siglo XVIII, la máquina de vapor revolucionó la producción industrial. Ingenieros como James Watt y George Stephenson hicieron avances clave en el transporte y la industria textil. 
            La revolución introdujo la mecanización, haciendo posible la producción masiva de bienes y el transporte rápido.
          </p>
        </div>
      </div>
    </section>

    {/* Segunda Revolución Industrial */}
    <section className="max-w-6xl mx-auto px-6 py-10 text-white">
      <h2 className="text-3xl font-semibold mb-4">Segunda Revolución Industrial</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image src="/images/second-industrial-revolution.webp" alt="Segunda Revolución Industrial" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 lg:ml-6">
          <p className="text-lg mb-4">
            La segunda revolución industrial, que tuvo lugar en el siglo XIX, fue marcada por la electrificación y la expansión de la producción en masa. Inventores como Thomas Edison y Nikola Tesla jugaron papeles clave en el desarrollo de la electricidad, permitiendo una mayor eficiencia y la expansión de las industrias en todo el mundo.
          </p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white text-center py-6">
        <Link href="/parciales/segundoParcial">
            Siguiente Parcial
        </Link>
    </footer>
  </div>
  )
}
