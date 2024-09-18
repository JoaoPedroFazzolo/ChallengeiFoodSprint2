const salesCtx = document.getElementById("salesChart").getContext("2d");
const expensesCtx = document.getElementById("expensesChart").getContext("2d");
const horizontalCtx = document
  .getElementById("horizontalBarChart")
  .getContext("2d");
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

const salesChart = new Chart(salesCtx, {
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

const expensesChart = new Chart(expensesCtx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [25, 25, 13, 12, 25],
        backgroundColor: [
          "#C40101",
          "#F30101",
          "#EF4444",
          "#F76565",
          "#F77E7E",
        ],
      },
    ],
    labels: ["Carne", "Bacon", "Pão", "Leite", "Outros"],
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

const updateChart = () => {
  const labels = [];
  const data = [];
  const backgroundColor = [];

  if (document.getElementById("checkboxCarne").checked) {
    labels.push("Carne");
    data.push(25);
    backgroundColor.push("#C40101");
  }
  if (document.getElementById("checkboxBacon").checked) {
    labels.push("Bacon");
    data.push(25);
    backgroundColor.push("#F30101");
  }
  if (document.getElementById("checkboxPao").checked) {
    labels.push("Pão");
    data.push(13);
    backgroundColor.push("#EF4444");
  }
  if (document.getElementById("checkboxLeite").checked) {
    labels.push("Leite");
    data.push(12);
    backgroundColor.push("#F76565");
  }
  if (document.getElementById("checkboxOutros").checked) {
    labels.push("Outros");
    data.push(25);
    backgroundColor.push("#F77E7E");
  }

  expensesChart.data.labels = labels;
  expensesChart.data.datasets[0].data = data;
  expensesChart.data.datasets[0].backgroundColor = backgroundColor;
  expensesChart.update();
};

document
  .getElementById("checkboxCarne")
  .addEventListener("change", updateChart);
document
  .getElementById("checkboxBacon")
  .addEventListener("change", updateChart);
document.getElementById("checkboxPao").addEventListener("change", updateChart);
document
  .getElementById("checkboxLeite")
  .addEventListener("change", updateChart);
document
  .getElementById("checkboxOutros")
  .addEventListener("change", updateChart);

const horizontalBarChart = new Chart(horizontalCtx, {
  type: "bar",
  data: {
    labels: ["X-Burguer", "X-Bacon", "X-Bacon-Egg", "X-Tudo", "Outros"],
    datasets: [
      {
        label: "Vendas",
        data: [12, 19, 3, 5, 7],
        backgroundColor: [
          "#C40101",
          "#F30101",
          "#EF4444",
          "#F76565",
          "#F77E7E",
        ],
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

const updateHorizontalChart = () => {
  const labels = [];
  const data = [];
  const backgroundColor = [];

  if (document.getElementById("checkboxXBurguer").checked) {
    labels.push("X-Burguer");
    data.push(12);
    backgroundColor.push("#C40101");
  }
  if (document.getElementById("checkboxXBacon2").checked) {
    labels.push("X-Bacon");
    data.push(19);
    backgroundColor.push("#F30101");
  }
  if (document.getElementById("checkboxXBaconEgg").checked) {
    labels.push("X-Bacon-Egg");
    data.push(3);
    backgroundColor.push("#EF4444");
  }
  if (document.getElementById("checkboxXTudo").checked) {
    labels.push("X-Tudo");
    data.push(5);
    backgroundColor.push("#F76565");
  }
  if (document.getElementById("checkboxOutros2").checked) {
    labels.push("Outros");
    data.push(7);
    backgroundColor.push("#F77E7E");
  }

  horizontalBarChart.data.labels = labels;
  horizontalBarChart.data.datasets[0].data = data;
  horizontalBarChart.data.datasets[0].backgroundColor = backgroundColor;
  horizontalBarChart.update();
};

document
  .getElementById("checkboxXBurguer")
  .addEventListener("change", updateHorizontalChart);
document
  .getElementById("checkboxXBacon2")
  .addEventListener("change", updateHorizontalChart);
document
  .getElementById("checkboxXBaconEgg")
  .addEventListener("change", updateHorizontalChart);
document
  .getElementById("checkboxXTudo")
  .addEventListener("change", updateHorizontalChart);
document
  .getElementById("checkboxOutros2")
  .addEventListener("change", updateHorizontalChart);

window.addEventListener("resize", function () {
  salesChart.resize();
  expensesChart.resize();
  horizontalBarChart.resize();
});

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
