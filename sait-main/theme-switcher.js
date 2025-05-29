document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themePrefKey = 'themePreference';
    const highContrastPrefKey = 'highContrastMode'; // Key from accessibility.js

    // Function to apply theme based on preference
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if(themeToggleButton) themeToggleButton.textContent = '☀️'; // Change icon to sun for light mode
        } else {
            body.classList.remove('dark-theme');
             if(themeToggleButton) themeToggleButton.textContent = '🌓'; // Change icon to moon for dark mode
        }
    };

    // Apply stored theme preference on page load, respecting high contrast mode
    const storedTheme = localStorage.getItem(themePrefKey);
    const highContrastEnabled = localStorage.getItem(highContrastPrefKey) === 'true';

    if (!highContrastEnabled) { // Only apply theme if high contrast is off
        if (storedTheme) {
            applyTheme(storedTheme);
        } else {
            // Optional: Check for system preference if no preference is stored
            // const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            // applyTheme(prefersDark ? 'dark' : 'light');
            applyTheme('light'); // Default to light if no preference
        }
    } else {
        // Ensure dark theme is removed if high contrast is enabled
        body.classList.remove('dark-theme');
        if(themeToggleButton) themeToggleButton.textContent = '🌓'; // Reset icon
    }


    // Add event listener for the theme toggle button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Disable theme toggle if high contrast is active
             if (localStorage.getItem(highContrastPrefKey) === 'true') {
                 alert('Темная тема недоступна в режиме высокой контрастности.');
                 return;
             }

            const isDark = body.classList.contains('dark-theme');
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem(themePrefKey, newTheme);
        });
    }

    // Optional: Listen for changes in high contrast mode to disable/re-enable theme
    // This requires a way for accessibility.js to signal changes, or periodic checks.
    // A simple way is to re-evaluate theme on storage event or visibility change.
    window.addEventListener('storage', (event) => {
        // Re-apply theme if high contrast mode changed in another tab
        if (event.key === highContrastPrefKey) {
             const highContrastNowEnabled = localStorage.getItem(highContrastPrefKey) === 'true';
             if (highContrastNowEnabled) {
                 body.classList.remove('dark-theme'); // Turn off dark theme
                 if(themeToggleButton) themeToggleButton.textContent = '🌓'; // Reset icon
                 localStorage.removeItem(themePrefKey); // Maybe clear theme pref? Or just visually disable?
             } else {
                 // High contrast was disabled, re-apply stored theme
                 const currentTheme = localStorage.getItem(themePrefKey) || 'light';
                 applyTheme(currentTheme);
             }
        } else if (event.key === themePrefKey) {
            // Sync theme if changed in another tab (and high contrast is not on)
             const highContrastNowEnabled = localStorage.getItem(highContrastPrefKey) === 'true';
             if (!highContrastNowEnabled) {
                 applyTheme(event.newValue);
             }
        }
    });
}); 