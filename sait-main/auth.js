// auth.js - Placeholder for registration and login logic

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            console.log('Регистрация:', { name, email, password });
            // TODO: Send registration data to backend API
            alert('Данные регистрации отправлены в консоль. Реальная регистрация требует бэкенда.');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            console.log('Вход:', { email, password });
            // TODO: Send login data to backend API for authentication
            alert('Данные для входа отправлены в консоль. Реальный вход требует бэкенда.');
        });
    }
}); 