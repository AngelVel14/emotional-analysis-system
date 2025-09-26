import { Chart } from "@/components/ui/chart"
// Professionals module functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize weekly reports chart
  const ctx = document.getElementById("weeklyChart")
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Vie"],
        datasets: [
          {
            label: "Reportes Semanales",
            data: [4, 6, 5, 8, 7, 5],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }
})
