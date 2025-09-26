"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Heart, CheckCircle } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "¿Cómo calificarías tu nivel de energía hoy?",
    options: [
      { value: "1", label: "Muy bajo" },
      { value: "2", label: "Bajo" },
      { value: "3", label: "Normal" },
      { value: "4", label: "Alto" },
      { value: "5", label: "Muy alto" },
    ],
  },
  {
    id: 2,
    question: "¿Qué tan satisfecho te sientes con tu día?",
    options: [
      { value: "1", label: "Nada satisfecho" },
      { value: "2", label: "Poco satisfecho" },
      { value: "3", label: "Moderadamente satisfecho" },
      { value: "4", label: "Muy satisfecho" },
      { value: "5", label: "Extremadamente satisfecho" },
    ],
  },
  {
    id: 3,
    question: "¿Has experimentado estrés hoy?",
    options: [
      { value: "1", label: "Nada de estrés" },
      { value: "2", label: "Poco estrés" },
      { value: "3", label: "Estrés moderado" },
      { value: "4", label: "Mucho estrés" },
      { value: "5", label: "Estrés extremo" },
    ],
  },
  {
    id: 4,
    question: "¿Cómo describirías tu estado de ánimo general?",
    options: [
      { value: "1", label: "Muy negativo" },
      { value: "2", label: "Negativo" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Positivo" },
      { value: "5", label: "Muy positivo" },
    ],
  },
]

export default function EncuestaPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    // Here you would typically send to a backend
    console.log("Survey answers:", answers)
    setSubmitted(true)
  }

  const isComplete = questions.every((q) => answers[q.id])

  if (submitted) {
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
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
                Contacto
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-8">
          <Card className="text-center">
            <CardContent className="py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Encuesta completada!</h2>
              <p className="text-gray-600 mb-6">
                Gracias por compartir tu estado emocional. Hemos registrado tus respuestas y pronto recibirás
                recomendaciones personalizadas.
              </p>
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="/dashboard">Volver al Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

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
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Volver al Dashboard
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Encuesta de Estado Emocional</CardTitle>
            <p className="text-gray-600">
              Responde estas preguntas para ayudarnos a entender mejor tu estado emocional actual.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {questions.map((question) => (
              <div key={question.id} className="space-y-4">
                <h3 className="font-medium text-gray-900">
                  {question.id}. {question.question}
                </h3>
                <RadioGroup
                  value={answers[question.id] || ""}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                >
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} />
                      <Label htmlFor={`q${question.id}-${option.value}`} className="cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <div className="flex justify-end gap-4 pt-6">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Cancelar</Link>
              </Button>
              <Button onClick={handleSubmit} disabled={!isComplete} className="bg-blue-500 hover:bg-blue-600">
                Enviar Encuesta
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
