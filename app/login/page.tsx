"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login con", email, password);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        
        {/* Logo y nombre */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl">💙</span>
          <span className="text-2xl font-bold text-gray-800">Moodly</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
}
