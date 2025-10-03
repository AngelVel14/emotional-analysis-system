"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    consentimiento: false,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }
    if (!form.consentimiento) {
      return alert("Debes aceptar el consentimiento informado");
    }
    console.log("Registro con", form);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        
        {/* Logo y nombre */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl">💙</span>
          <span className="text-2xl font-bold text-gray-800">Moodly</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nombre"
            placeholder="Nombre completo"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <label className="flex items-start space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="consentimiento"
              checked={form.consentimiento}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              Acepto el consentimiento informado y las políticas de privacidad
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}
