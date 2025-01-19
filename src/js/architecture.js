document.addEventListener('DOMContentLoaded', function() {
    const perfChart = document.getElementById('performanceChart');
    if (perfChart) {
        new Chart(perfChart, {
            type: 'bar',
            data: {
                labels: ['Global Network', 'Ethereum', 'BSC', 'Polygon'],
                datasets: [{
                    label: 'Transactions Per Second',
                    data: [4000, 15, 300, 7000],
                    backgroundColor: [
                        '#4299e1',
                        '#48bb78',
                        '#ed8936',
                        '#9f7aea'
                    ]
                }, {
                    label: 'Average Gas Fee (USD)',
                    data: [0.001, 5, 0.3, 0.1],
                    backgroundColor: [
                        '#63b3ed',
                        '#68d391',
                        '#f6ad55',
                        '#b794f4'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Comparison with Major Networks'
                    }
                }
            }
        });
    }
});
