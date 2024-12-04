import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-gray-900 p-6 shadow-md">
    <nav className="max-w-6xl mx-auto flex justify-between items-center">
      <Link 
        href={'/'}
        className="text-white text-2xl font-semibold"
      >Mi Proyecto</Link>
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
      <div className="md:hidden">
        <button className="text-white focus:outline-none">☰</button>
      </div>
    </nav>
  </header>
  )
}
