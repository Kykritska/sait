document.addEventListener('DOMContentLoaded', () => {
    const visitCountElement = document.getElementById('visit-count');

    if (visitCountElement) {
        // Check if this is the first visit in this session
        if (!sessionStorage.getItem('visited')) {
            let count = localStorage.getItem('visitorCount');
            count = count ? parseInt(count) + 1 : 1;
            localStorage.setItem('visitorCount', count);
            sessionStorage.setItem('visited', 'true');
        }
        
        // Display the current count
        const currentCount = localStorage.getItem('visitorCount') || 0;
        visitCountElement.textContent = currentCount;
    }
}); 