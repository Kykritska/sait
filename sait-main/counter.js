document.addEventListener('DOMContentLoaded', () => {
    const visitCountElement = document.getElementById('visit-count');

    if (visitCountElement) {
        let count = localStorage.getItem('visitorCount');

        if (count === null) {
            count = 1;
        } else {
            count = parseInt(count) + 1;
        }

        localStorage.setItem('visitorCount', count);
        visitCountElement.textContent = count;
    }
}); 