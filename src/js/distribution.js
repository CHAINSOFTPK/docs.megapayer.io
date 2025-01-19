document.addEventListener('DOMContentLoaded', function() {
    // Distribution Chart
    const distributionCtx = document.getElementById('distributionChart');
    if (distributionCtx) {
        new Chart(distributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Ecosystem Growth', 'Development Fund', 'Public Sale', 'Team', 'Reserve'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#4299e1',
                        '#48bb78',
                        '#ed8936',
                        '#9f7aea',
                        '#667eea'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        position: 'right',
                    }
                }
            }
        });
    }

    // Vesting Chart
    const vestingCtx = document.getElementById('vestingChart');
    if (vestingCtx) {
        new Chart(vestingCtx, {
            type: 'line',
            data: {
                labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12', 'Month 15', 'Month 18', 'Month 21', 'Month 24'],
                datasets: [{
                    label: 'Token Release Schedule',
                    data: [10, 20, 35, 50, 65, 80, 90, 95, 100],
                    borderColor: '#4299e1',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(66, 153, 225, 0.1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
});
