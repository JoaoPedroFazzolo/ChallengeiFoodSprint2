const salesCtx = document.getElementById('salesChart').getContext('2d');
const DATA_DEFAULT = [25, 25, 13, 12, 25];
const BACKGROUND_DEFAULT = ['#FF6347', '#FF4500', '#FFD700', '#FFB6C1', '#FF0000'];
const LABELS_DEFAULT = ['Carne', 'Bacon', 'Pão', 'Leite', 'Outros'];

const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 10],
            borderColor: 'red',
            borderWidth: 2,
            label: 'Vendas',
            backgroundColor: "red",
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const expensesCtx = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(expensesCtx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 25, 13, 12, 25],
            backgroundColor: ['#FF6347', '#FF4500', '#FFD700', '#FFB6C1', '#FF0000']
        }],
        labels: ['Carne', 'Bacon', 'Pão', 'Leite', 'Outros']
    },
    options: {
        responsive: true
    }
});

const updateChart = () => {
    const chartInfos = {
      labels: [],
      data: [],
      backgroundColor: [],
    };
  
    if (document.getElementById("checkboxCarne").checked) {
      chartInfos.labels.push("Carne");
      chartInfos.data.push(25);
      chartInfos.backgroundColor.push("#FF6347");
    }
    if (document.getElementById("checkboxBacon").checked) {
      chartInfos.labels.push("Bacon");
      chartInfos.data.push(25);
      chartInfos.backgroundColor.push("#FF4500");
    }
    if (document.getElementById("checkboxPao").checked) {
      chartInfos.labels.push("Pão");
      chartInfos.data.push(13);
      chartInfos.backgroundColor.push("#FFD700");
    }
    if (document.getElementById("checkboxLeite").checked) {
      chartInfos.labels.push("Leite");
      chartInfos.data.push(12);
      chartInfos.backgroundColor.push("#FFB6C1");
    }
    if (document.getElementById("checkboxOutros").checked) {
      chartInfos.labels.push("Outros");
      chartInfos.data.push(25);
      chartInfos.backgroundColor.push("#FF0000");
    }
  
    if (
      !chartInfos.labels.length &&
      !chartInfos.data.length &&
      !chartInfos.backgroundColor.length
    ) {
      expensesChart.data.labels = LABELS_DEFAULT;
      expensesChart.data.datasets[0].data = DATA_DEFAULT;
      expensesChart.data.datasets[0].backgroundColor = BACKGROUND_DEFAULT;
    } else {
      expensesChart.data.labels = chartInfos.labels;
      expensesChart.data.datasets[0].data = chartInfos.data;
      expensesChart.data.datasets[0].backgroundColor = chartInfos.backgroundColor;
    }
  
    expensesChart.update();
  };

document.getElementById('checkboxCarne').addEventListener('change', updateChart);
document.getElementById('checkboxBacon').addEventListener('change', updateChart);
document.getElementById('checkboxPao').addEventListener('change', updateChart);
document.getElementById('checkboxLeite').addEventListener('change', updateChart);
document.getElementById('checkboxOutros').addEventListener('change', updateChart);
