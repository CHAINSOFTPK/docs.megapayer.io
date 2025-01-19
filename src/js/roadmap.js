document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        });

    // Initialize development progress chart
    const ctx = document.getElementById('developmentChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025'],
                datasets: [{
                    label: 'Completed Tasks',
                    data: [45, 20, 0, 0, 0],
                    backgroundColor: '#4299e1',
                }, {
                    label: 'Planned Tasks',
                    data: [0, 25, 35, 40, 30],
                    backgroundColor: 'rgba(66, 153, 225, 0.2)',
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Completion Percentage'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Development Progress Timeline'
                    }
                }
            }
        });
    }
});
