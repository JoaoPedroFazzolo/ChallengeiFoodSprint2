const salesCtx = document.getElementById('salesChart').getContext('2d');
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
            backgroundColor: ['#C40101', '#F30101', '#EF4444', '#F76565', '#F77E7E']
        }],
        labels: ['Carne', 'Bacon', 'Pão', 'Leite', 'Outros']
    },
    options: {
        responsive: true
    }
});

const updateChart = () => {
    const labels = [];
    const data = [];
    const backgroundColor = [];

    if (document.getElementById('checkboxCarne').checked) {
        labels.push('Carne');
        data.push(25);
        backgroundColor.push('#C40101');
    }
    if (document.getElementById('checkboxBacon').checked) {
        labels.push('Bacon');
        data.push(25); 
        backgroundColor.push('#F30101');
    }
    if (document.getElementById('checkboxPao').checked) {
        labels.push('Pão');
        data.push(13); 
        backgroundColor.push('#EF4444');
    }
    if (document.getElementById('checkboxLeite').checked) {
        labels.push('Leite');
        data.push(12); 
        backgroundColor.push('#F76565');
    }
    if (document.getElementById('checkboxOutros').checked) {
        labels.push('Outros');
        data.push(25); 
        backgroundColor.push('#F77E7E');
    }

    expensesChart.data.labels = labels;
    expensesChart.data.datasets[0].data = data;
    expensesChart.data.datasets[0].backgroundColor = backgroundColor;
    expensesChart.update();
};

document.getElementById('checkboxCarne').addEventListener('change', updateChart);
document.getElementById('checkboxBacon').addEventListener('change', updateChart);
document.getElementById('checkboxPao').addEventListener('change', updateChart);
document.getElementById('checkboxLeite').addEventListener('change', updateChart);
document.getElementById('checkboxOutros').addEventListener('change', updateChart);
