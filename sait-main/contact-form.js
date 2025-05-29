document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('form-status-message');

    if (form && statusMessage) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Keep preventing default submission

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