document.addEventListener('DOMContentLoaded', function() {
    // Distribution Chart
    const distributionCtx = document.getElementById('distributionChart');
    if (distributionCtx) {
        new Chart(distributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Public Sale', 'Team & Advisors', 'Development Fund', 'Ecosystem Growth', 'Reserve'],
                datasets: [{
                    data: [10, 15, 25, 30, 20],
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
                        position: 'bottom',
                        labels: {
                            padding: 20
                        }
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
                labels: ['Month 0', 'Month 6', 'Month 12', 'Month 18', 'Month 24'],
                datasets: [{
                    label: 'Token Unlock Schedule',
                    data: [10, 25, 45, 75, 100],
                    borderColor: '#4299e1',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(66, 153, 225, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 3,
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
