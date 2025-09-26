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
    // Aquí puedes hacer fetch a tu backend
    router.push("/login");
  };

  return (
    <div className="auth-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo electrónico" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <input name="confirmPassword" type="password" placeholder="Confirmar contraseña" onChange={handleChange} required />

        <label>
          <input
            type="checkbox"
            name="consentimiento"
            checked={form.consentimiento}
            onChange={handleChange}
          />
          Acepto el consentimiento informado y políticas de privacidad
        </label>

        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
    </div>
  );
}
