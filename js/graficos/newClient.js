export const creatNewClient = (ctx) => {
    return new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
            datasets: [
                {
                    data: [300, 200, 500, 100],
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
