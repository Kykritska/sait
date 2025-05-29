document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('accessibility-toggle');
    const body = document.body;
    const accessibilityPrefKey = 'highContrastMode';

    // Apply stored preference on page load
    if (localStorage.getItem(accessibilityPrefKey) === 'true') {
        body.classList.add('high-contrast');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('high-contrast')) {
                body.classList.remove('high-contrast');
                localStorage.setItem(accessibilityPrefKey, 'false');
            } else {
                body.classList.add('high-contrast');
                localStorage.setItem(accessibilityPrefKey, 'true');
            }
        });
    }
}); 