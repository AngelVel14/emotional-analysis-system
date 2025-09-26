document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  // Login form handler
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      if (!email || !password) {
        alert("Por favor, completa todos los campos")
        return
      }

      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido")
        return
      }

      alert("¡Bienvenido a Moodly!")

      // Store simple user data
      localStorage.setItem(
        "moodlyUser",
        JSON.stringify({
          email: email,
          name: email.split("@")[0],
        }),
      )

      // Redirect to dashboard
      window.location.href = "dashboard.html"
    })
  }

  // Register form handler
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const nombre = document.getElementById("nombre").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value
      const consent = document.getElementById("consent").checked

      if (!nombre || !email || !password || !confirmPassword) {
        alert("Por favor, completa todos los campos")
        return
      }

      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido")
        return
      }

      if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres")
        return
      }

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden")
        return
      }

      if (!consent) {
        alert("Debes aceptar el consentimiento informado y las políticas de privacidad")
        return
      }

      alert("¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.")
      window.location.href = "login.html"
    })
  }
})

function logout() {
  localStorage.removeItem("moodlyUser")
  alert("Sesión cerrada correctamente")
  window.location.href = "index.html"
}
