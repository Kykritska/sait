document.addEventListener('DOMContentLoaded', () => {
    const warrantyForm = document.getElementById('warrantyForm');
    const formStatus = document.getElementById('warrantyFormStatus');

    if (warrantyForm) {
        warrantyForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            formStatus.textContent = '';
            formStatus.className = 'form-status-message';

            // Basic Frontend Validation (more robust validation should be added)
            let isValid = true;
            const fullName = document.getElementById('warrantyFullName').value.trim();
            const email = document.getElementById('warrantyEmail').value.trim();
            const phone = document.getElementById('warrantyPhone').value.trim();
            const productName = document.getElementById('warrantyProductName').value.trim();
            const purchaseDate = document.getElementById('warrantyPurchaseDate').value;
            const orderNumber = document.getElementById('warrantyOrderNumber').value.trim();
            const issueDescription = document.getElementById('warrantyIssueDescription').value.trim();

            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

            if (!fullName) {
                document.getElementById('warrantyFullNameError').textContent = 'Пожалуйста, укажите ФИО.';
                isValid = false;
            }
            if (!email || !validateEmail(email)) {
                document.getElementById('warrantyEmailError').textContent = 'Пожалуйста, укажите корректный e-mail.';
                isValid = false;
            }
            if (!phone || !validatePhone(phone)) {
                document.getElementById('warrantyPhoneError').textContent = 'Пожалуйста, укажите корректный номер телефона (11 цифр).';
                isValid = false;
            }
            if (!productName) {
                document.getElementById('warrantyProductNameError').textContent = 'Пожалуйста, укажите наименование товара.';
                isValid = false;
            }
            if (!purchaseDate) {
                document.getElementById('warrantyPurchaseDateError').textContent = 'Пожалуйста, укажите дату покупки.';
                isValid = false;
            } else {
                const today = new Date().toISOString().split('T')[0];
                if (purchaseDate > today) {
                    document.getElementById('warrantyPurchaseDateError').textContent = 'Дата покупки не может быть в будущем.';
                    isValid = false;
                }
            }
            if (!orderNumber) {
                document.getElementById('warrantyOrderNumberError').textContent = 'Пожалуйста, укажите номер заказа или чека.';
                isValid = false;
            }
            if (!issueDescription) {
                document.getElementById('warrantyIssueDescriptionError').textContent = 'Пожалуйста, опишите проблему.';
                isValid = false;
            }

            if (!isValid) {
                formStatus.textContent = 'Пожалуйста, исправьте ошибки в форме.';
                formStatus.classList.add('error');
                return;
            }

            // Simulate form submission (replace with actual submission logic, e.g., using Fetch API to a backend)
            formStatus.textContent = 'Отправка данных...';
            formStatus.classList.remove('error', 'success');

            // Using Formspree as an example, replace with your actual endpoint
            const formData = new FormData(warrantyForm);
            
            try {
                // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint or backend URL
                // For example: https://formspree.io/f/YOUR_FORM_ID
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { 
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
                    formStatus.classList.add('success');
                    warrantyForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.textContent = 'Ошибка при отправке заявки. Пожалуйста, попробуйте позже.';
                    }
                    formStatus.classList.add('error');
                }
            } catch (error) {
                console.error('Error submitting warranty form:', error);
                formStatus.textContent = 'Ошибка при отправке заявки. Проверьте консоль для деталей.';
                formStatus.classList.add('error');
            }
        });

        warrantyForm.addEventListener('reset', () => {
            formStatus.textContent = '';
            formStatus.className = 'form-status-message';
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        // Basic validation for 11 digits, can be improved for specific formats
        const cleanedPhone = phone.replace(/\D/g, '');
        return cleanedPhone.length === 11;
    }
}); 