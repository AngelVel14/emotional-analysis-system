import { Chart } from "@/components/ui/chart"
// Dashboard functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize emotional chart
  const ctx = document.getElementById("emotionalChart")
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Día 1", "Día 2", "Día 3", "Día 4", "Día 5", "Día 7"],
        datasets: [
          {
            label: "Estado Emocional",
            data: [6, 7, 5, 8, 6, 4],
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
            max: 10,
          },
        },
      },
    })
  }
})
