document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-bar a');
    const currentPath = window.location.pathname.split('/').pop(); // Get the filename (e.g., 'index.html')

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        
        // Handle special case for index.html or root path
        const isActive = (currentPath === '' && linkPath === 'index.html') || 
                         (currentPath !== '' && currentPath === linkPath);

        if (isActive) {
            link.classList.add('active');
            // Optional: Add class to parent LI as well for more styling options
            link.parentElement.classList.add('active-item'); 
        }
    });
}); 