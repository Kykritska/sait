document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('form-status-message');
    const nameInput = document.getElementById('contact-name');

    // Функция валидации имени и фамилии
    function validateName(name) {
        // Проверяем, что имя содержит только буквы, пробелы и дефисы
        const nameRegex = /^[А-Яа-яЁё\s-]+$/;
        if (!nameRegex.test(name)) {
            return 'Имя и фамилия должны содержать только русские буквы, пробелы и дефисы';
        }

        // Разбиваем на части (имя и фамилия)
        const parts = name.trim().split(/\s+/);
        
        if (parts.length < 2) {
            return 'Пожалуйста, введите имя и фамилию';
        }

        // Проверяем каждую часть
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            
            // Проверяем, что каждая часть начинается с заглавной буквы
            if (part.length > 0 && part[0] !== part[0].toUpperCase()) {
                return 'Имя и фамилия должны начинаться с заглавной буквы';
            }
            
            // Проверяем, что остальные буквы строчные
            for (let j = 1; j < part.length; j++) {
                if (part[j] === part[j].toUpperCase() && part[j] !== part[j].toLowerCase()) {
                    return 'Все буквы кроме первой должны быть строчными';
                }
            }
        }

        return null; // Валидация прошла успешно
    }

    // Функция для автоматического форматирования имени
    function formatName(name) {
        return name
            .toLowerCase()
            .split(/\s+/)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    // Обработчик события input для поля имени
    if (nameInput) {
        nameInput.addEventListener('input', (event) => {
            const value = event.target.value;
            const errorElement = nameInput.parentNode.querySelector('.field-error');
            
            // Удаляем предыдущее сообщение об ошибке
            if (errorElement) {
                errorElement.remove();
            }

            // Если поле не пустое, проверяем валидацию
            if (value.trim()) {
                const validationError = validateName(value);
                if (validationError) {
                    // Создаем элемент для отображения ошибки
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'field-error';
                    errorDiv.style.color = '#ff4444';
                    errorDiv.style.fontSize = '0.9em';
                    errorDiv.style.marginTop = '5px';
                    errorDiv.textContent = validationError;
                    nameInput.parentNode.appendChild(errorDiv);
                }
            }
        });

        // Обработчик события blur для автоматического форматирования
        nameInput.addEventListener('blur', (event) => {
            const value = event.target.value.trim();
            if (value) {
                const formattedName = formatName(value);
                if (formattedName !== value) {
                    event.target.value = formattedName;
                }
            }
        });
    }

    if (form && statusMessage) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Keep preventing default submission

            // Проверяем валидацию имени перед отправкой
            if (nameInput && nameInput.value.trim()) {
                const validationError = validateName(nameInput.value);
                if (validationError) {
                    statusMessage.textContent = `Ошибка валидации: ${validationError}`;
                    statusMessage.classList.add('error');
                    statusMessage.style.display = 'block';
                    nameInput.focus();
                    return;
                }
            }

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Отправка...';
            statusMessage.style.display = 'none'; // Hide previous status
            statusMessage.className = 'form-status-message'; // Reset classes

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json' // Important for Formspree AJAX
                    }
                });

                if (response.ok) {
                    // Success
                    statusMessage.textContent = 'Сообщение успешно отправлено!';
                    statusMessage.classList.add('success');
                    form.reset(); // Clear the form fields
                } else {
                    // Handle server errors (e.g., Formspree config error)
                    const responseData = await response.json();
                    let errorMsg = 'Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.';
                    if (responseData && responseData.errors) {
                        errorMsg = responseData.errors.map(error => error.message).join(', ');
                    }
                    statusMessage.textContent = `Ошибка: ${errorMsg}`;
                    statusMessage.classList.add('error');
                }
            } catch (error) {
                // Handle network errors
                console.error('Form submission error:', error);
                statusMessage.textContent = 'Ошибка сети. Не удалось отправить сообщение.';
                statusMessage.classList.add('error');
            } finally {
                // Re-enable button and restore text
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                statusMessage.style.display = 'block'; // Show status message
            }
        });
    } else {
        if (!form) console.error('Contact form not found');
        if (!statusMessage) console.error('Form status message element not found');
    }
}); 