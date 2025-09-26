import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, BarChart3, Users, FileText, Calendar } from "lucide-react"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Inicio
            </Link>
            <Link href="/servicios" className="text-blue-600 font-medium">
              Servicios
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un sistema integral de análisis emocional con herramientas personalizadas para usuarios y
            profesionales de la salud mental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>Análisis Emocional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Evaluación continua del estado emocional mediante encuestas inteligentes y análisis de patrones.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>Diario Emocional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Registro personal de emociones y experiencias diarias para un mejor autoconocimiento.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>Reportes Visuales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Gráficos y estadísticas detalladas sobre la evolución emocional a lo largo del tiempo.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>Recomendaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sugerencias personalizadas basadas en el análisis de tu estado emocional actual.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>Módulo Profesional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Herramientas especializadas para terapeutas y profesionales de la salud mental.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>Seguimiento Continuo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Monitoreo constante del bienestar emocional con alertas en casos críticos.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
