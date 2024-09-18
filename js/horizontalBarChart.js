const initialHorizontalLabels = [
  "X-Burguer",
  "X-Bacon",
  "X-Bacon-Egg",
  "X-Tudo",
  "Outros",
];
const initialHorizontalData = [12, 19, 3, 5, 7];
const initialHorizontalBackgroundColor = [
  "#C40101",
  "#F30101",
  "#EF4444",
  "#F76565",
  "#F77E7E",
];

export const createHorizontalBarChart = (ctx) => {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: [...initialHorizontalLabels],
      datasets: [
        {
          label: "Vendas",
          data: [...initialHorizontalData],
          backgroundColor: [...initialHorizontalBackgroundColor],
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
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

export const updateHorizontalChart = (chart, checkboxes) => {
  const labels = [];
  const data = [];
  const backgroundColor = [];

  if (checkboxes.xBurguer.checked) {
    labels.push("X-Burguer");
    data.push(12);
    backgroundColor.push("#C40101");
  }
  if (checkboxes.xBacon2.checked) {
    labels.push("X-Bacon");
    data.push(19);
    backgroundColor.push("#F30101");
  }
  if (checkboxes.xBaconEgg.checked) {
    labels.push("X-Bacon-Egg");
    data.push(3);
    backgroundColor.push("#EF4444");
  }
  if (checkboxes.xTudo.checked) {
    labels.push("X-Tudo");
    data.push(5);
    backgroundColor.push("#F76565");
  }
  if (checkboxes.outros2.checked) {
    labels.push("Outros");
    data.push(7);
    backgroundColor.push("#F77E7E");
  }

  if (labels.length === 0) {
    chart.data.labels = [...initialHorizontalLabels];
    chart.data.datasets[0].data = [...initialHorizontalData];
    chart.data.datasets[0].backgroundColor = [
      ...initialHorizontalBackgroundColor,
    ];
  } else {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].backgroundColor = backgroundColor;
  }

  chart.update();
};
