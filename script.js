function checkAuthAndRedirect() {
  // For now, just redirect to a simple dashboard
  window.location.href = "dashboard.html"
}

// Simple navigation functions
function goToLogin() {
  window.location.href = "login.html"
}

function goToRegister() {
  window.location.href = "register.html"
}

function goToHome() {
  window.location.href = "index.html"
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  console.log("Moodly app loaded successfully")
})
