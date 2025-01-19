document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('scalabilityChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Base Layer', 'With State Channels', 'With Sharding', 'With Rollups'],
                datasets: [{
                    label: 'Transactions Per Second',
                    data: [4000, 20000, 100000, 50000],
                    backgroundColor: [
                        '#4299e1',
                        '#48bb78',
                        '#ed8936',
                        '#9f7aea'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'TPS'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Scaling Solution Performance Comparison'
                    }
                }
            }
        });
    }
});
