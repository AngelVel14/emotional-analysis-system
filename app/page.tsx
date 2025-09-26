import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Inicio
          </Link>
          <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium">
            Servicios
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
            Blog
          </Link>
          <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
            Contacto
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight text-balance">
              Sistema de
              <br />
              Análisis Afectivo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Evaluamos tu estado emocional y
              <br />
              te brindamos recomendaciones
              <br />
              personalizadas.
            </p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-xl">
              <Link href="/dashboard">Empezar</Link>
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Happy face circle */}
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mb-8 mx-auto">
                <div className="text-white text-4xl">😊</div>
              </div>

              {/* Person illustration */}
              <div className="w-80 h-96 bg-blue-100 rounded-3xl flex items-end justify-center overflow-hidden">
                <div className="w-48 h-64 bg-blue-500 rounded-t-full relative">
                  {/* Simple person shape */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-200 rounded-full"></div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full -ml-2"></div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full ml-2"></div>
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gray-800 rounded-t-3xl"></div>
                </div>
              </div>

              {/* Background chart decoration */}
              <div className="absolute top-0 right-0 w-24 h-16 bg-gray-100 rounded-lg opacity-50">
                <div className="p-2">
                  <div className="w-full h-2 bg-blue-200 rounded mb-1"></div>
                  <div className="w-3/4 h-2 bg-blue-200 rounded mb-1"></div>
                  <div className="w-1/2 h-2 bg-blue-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
