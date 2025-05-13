document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');

    function updateClock() {
        if (!clockElement) return; // Exit if clock element doesn't exist

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateClock(); // Initial call to display clock immediately
    setInterval(updateClock, 1000); // Update clock every second
}); 