import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    title: "La importancia del bienestar emocional en el trabajo",
    excerpt:
      "Descubre cómo mantener un equilibrio emocional saludable en el ambiente laboral y mejorar tu productividad.",
    author: "Dr. María González",
    date: "15 de abril, 2024",
    readTime: "5 min",
  },
  {
    title: "Técnicas de mindfulness para la ansiedad",
    excerpt: "Aprende ejercicios prácticos de atención plena que te ayudarán a manejar los momentos de ansiedad.",
    author: "Lic. Carlos Ruiz",
    date: "12 de abril, 2024",
    readTime: "7 min",
  },
  {
    title: "Cómo interpretar tus emociones diarias",
    excerpt: "Una guía completa para entender mejor tus estados emocionales y patrones de comportamiento.",
    author: "Dra. Ana Martínez",
    date: "10 de abril, 2024",
    readTime: "6 min",
  },
]

export default function BlogPage() {
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
            <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium">
              Servicios
            </Link>
            <Link href="/blog" className="text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Artículos y recursos sobre bienestar emocional y salud mental</p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl hover:text-blue-600 cursor-pointer">{post.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime} de lectura</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <Link href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Leer más →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
