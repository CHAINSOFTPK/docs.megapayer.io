document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile menu toggle
    const menuToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Set active menu item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`.sidebar-nav a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            sidebar &&
            sidebar.classList.contains('active') &&
            !e.target.closest('.sidebar') && 
            !e.target.closest('.mobile-nav-toggle')) {
            sidebar.classList.remove('active');
            menuToggle?.classList.remove('active');
        }
    });
});
