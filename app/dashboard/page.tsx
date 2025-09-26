"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Lightbulb } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const emotionalData = [
  { day: "Día 1", value: 7 },
  { day: "Día 2", value: 6 },
  { day: "Día 3", value: 4 },
  { day: "Día 4", value: 8 },
  { day: "Día 5", value: 6 },
  { day: "Día 7", value: 5 },
]

const diaryEntries = [
  { date: "17 de abril", entry: "He tenido un día estresante" },
  { date: "16 de abril", entry: "Me siento contento" },
  { date: "15 de abril", entry: "Todo ha estado normal" },
]

export default function DashboardPage() {
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

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard del Usuario</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Emotional Evolution Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Evolución Emocional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={emotionalData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                    <YAxis hide />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Daily Recommendations */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  Recomendaciones del Día
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Considera realizar alguna actividad placentera</p>
              </CardContent>
            </Card>

            {/* Emotional Diary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Diario Emocional</CardTitle>
                <p className="text-sm text-gray-600">Últimas entradas</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {diaryEntries.map((entry, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <span className="text-sm text-gray-500 min-w-fit">{entry.date}</span>
                      <span className="text-gray-700 ml-4">{entry.entry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex gap-4">
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="/encuesta">Nueva Encuesta</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/diario">Escribir en Diario</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
