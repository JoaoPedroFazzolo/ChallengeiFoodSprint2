// Gráfico de vendas
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

// Gráfico de despesas
const expensesCtx = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(expensesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Carne', 'Bacon', 'Pão', 'Leite', 'Outros'],
        datasets: [{
            data: [25, 25, 13, 12, 25],
            backgroundColor: ['#FF6347', '#FF4500', '#FFD700', '#FFB6C1', '#FF0000']
        }]
        },
    options: {
        responsive: true
        }
    });