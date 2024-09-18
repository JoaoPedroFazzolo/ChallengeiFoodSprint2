const initialExpensesLabels = ["Carne", "Bacon", "Pão", "Leite", "Outros"];
const initialExpensesData = [25, 25, 13, 12, 25];
const initialExpensesBackgroundColor = [
  "#C40101",
  "#F30101",
  "#EF4444",
  "#F76565",
  "#F77E7E",
];

export const createExpensesChart = (ctx) => {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [...initialExpensesLabels],
      datasets: [
        {
          data: [...initialExpensesData],
          backgroundColor: [...initialExpensesBackgroundColor],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
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

export const updateExpensesChart = (chart, checkboxes) => {
  const labels = [];
  const data = [];
  const backgroundColor = [];

  if (checkboxes.carne.checked) {
    labels.push("Carne");
    data.push(25);
    backgroundColor.push("#C40101");
  }
  if (checkboxes.bacon.checked) {
    labels.push("Bacon");
    data.push(25);
    backgroundColor.push("#F30101");
  }
  if (checkboxes.pao.checked) {
    labels.push("Pão");
    data.push(13);
    backgroundColor.push("#EF4444");
  }
  if (checkboxes.leite.checked) {
    labels.push("Leite");
    data.push(12);
    backgroundColor.push("#F76565");
  }
  if (checkboxes.outros.checked) {
    labels.push("Outros");
    data.push(25);
    backgroundColor.push("#F77E7E");
  }

  if (labels.length === 0) {
    chart.data.labels = [...initialExpensesLabels];
    chart.data.datasets[0].data = [...initialExpensesData];
    chart.data.datasets[0].backgroundColor = [
      ...initialExpensesBackgroundColor,
    ];
  } else {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].backgroundColor = backgroundColor;
  }

  chart.update();
};
