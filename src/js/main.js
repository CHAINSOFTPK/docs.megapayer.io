document.addEventListener('DOMContentLoaded', function() {
    // Network Metrics Chart
    const ctx = document.getElementById('metricsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Transaction Speed (TPS)',
                    data: [1000, 2000, 3000, 4000],
                    borderColor: '#4299e1',
                    tension: 0.4
                }, {
                    label: 'Average Gas Fee (GNF)',
                    data: [0.001, 0.0008, 0.0006, 0.0005],
                    borderColor: '#48bb78',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Network Performance Metrics'
                    }
                }
            }
        });
    }

    // Animate numbers function
    function animateValue(element, start, end, duration) {
        if (!element) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Animate stats when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate validator count
                animateValue(document.getElementById('validatorCount'), 0, 1000, 2000);
                // Animate transaction count
                animateValue(document.getElementById('transactionCount'), 0, 1456789, 2000);
                // Animate uptime (if needed)
                const uptimeElement = document.getElementById('uptimeValue');
                if (uptimeElement) {
                    uptimeElement.textContent = '99.99';
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe the stats section
    const statsSection = document.querySelector('.realtime-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});