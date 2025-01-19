document.addEventListener('DOMContentLoaded', function() {
    // Bridge Metrics Chart
    const bridgeCtx = document.getElementById('bridgeMetricsChart');
    if (bridgeCtx) {
        new Chart(bridgeCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Cross-Chain Transactions',
                    data: [50000, 150000, 250000, 400000, 600000, 1000000],
                    borderColor: '#4299e1',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Bridge Transaction Volume'
                    }
                }
            }
        });
    }

    // Security Metrics Chart
    const securityCtx = document.getElementById('securityMetricsChart');
    if (securityCtx) {
        new Chart(securityCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Network Security',
                    'Smart Contract Safety',
                    'Node Distribution',
                    'Attack Prevention',
                    'Recovery Speed'
                ],
                datasets: [{
                    label: 'Security Metrics',
                    data: [95, 98, 90, 92, 94],
                    backgroundColor: 'rgba(66, 153, 225, 0.2)',
                    borderColor: '#4299e1'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
});
