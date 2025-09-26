"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Calendar, Save } from "lucide-react"

export default function DiarioPage() {
  const [entry, setEntry] = useState("")
  const [mood, setMood] = useState("")

  const moodOptions = [
    { emoji: "😊", label: "Feliz", value: "happy" },
    { emoji: "😐", label: "Normal", value: "neutral" },
    { emoji: "😔", label: "Triste", value: "sad" },
    { emoji: "😰", label: "Ansioso", value: "anxious" },
    { emoji: "😡", label: "Enojado", value: "angry" },
  ]

  const handleSave = () => {
    // Here you would typically save to a database
    console.log("Saving diary entry:", { entry, mood, date: new Date() })
    alert("Entrada guardada exitosamente!")
    setEntry("")
    setMood("")
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
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="w-6 h-6 text-blue-500" />
              Diario Emocional
            </CardTitle>
            <p className="text-gray-600">
              {new Date().toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mood Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">¿Cómo te sientes hoy?</label>
              <div className="flex gap-4 flex-wrap">
                {moodOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setMood(option.value)}
                    className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                      mood === option.value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl mb-1">{option.emoji}</span>
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Diary Entry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Escribe sobre tu día</label>
              <Textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="¿Qué ha pasado hoy? ¿Cómo te has sentido? Comparte tus pensamientos y emociones..."
                rows={8}
                className="resize-none"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Cancelar</Link>
              </Button>
              <Button onClick={handleSave} disabled={!entry.trim() || !mood} className="bg-blue-500 hover:bg-blue-600">
                <Save className="w-4 h-4 mr-2" />
                Guardar Entrada
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
