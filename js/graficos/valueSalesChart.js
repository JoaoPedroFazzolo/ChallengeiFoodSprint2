export const createValueSalesChart = (ctx) => {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"],
      datasets: [
        {
          data: [1300, 5650, 3500, 7000, 6930, 8520, 4358],
          borderColor: "red",
          borderWidth: 2,
          label: "Valor total",
          backgroundColor: "red",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
          position: "bottom",
          labels: {
            usePointStyle: false,
          },
          onClick: null,
        },
      },
    },
  });
};
