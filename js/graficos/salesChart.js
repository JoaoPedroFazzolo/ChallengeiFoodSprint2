export const createSalesChart = (ctx) => {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3, 10],
          borderColor: "red",
          borderWidth: 2,
          label: "Vendas",
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
