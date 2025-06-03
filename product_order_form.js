document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productOrderForm');
    const lastNameInput = document.getElementById('lastName');
    const passwordInput = document.getElementById('password');
    const recipientAddressInput = document.getElementById('recipientAddress');
    const quantityInput = document.getElementById('quantity');
    const productTypeSelect = document.getElementById('productType');
    const productNameSelect = document.getElementById('productName');
    const stockInfoMessage = document.createElement('p'); // Element to display stock info
    stockInfoMessage.id = 'stock-info-message';
    stockInfoMessage.style.marginTop = '5px';
    stockInfoMessage.style.fontSize = '0.9em';
    // Insert it after the quantity input or product name select for visibility
    if (quantityInput && quantityInput.parentNode) {
        quantityInput.parentNode.insertBefore(stockInfoMessage, quantityInput.nextSibling);
    }

    const lastNameError = document.getElementById('lastNameError');
    const passwordError = document.getElementById('passwordError');
    const recipientAddressError = document.getElementById('recipientAddressError');
    const quantityError = document.getElementById('quantityError');
    const productNameError = document.getElementById('productNameError'); // Новый элемент ошибки

    // Hide errors by default
    if(lastNameError) lastNameError.style.display = 'none';
    if(passwordError) passwordError.style.display = 'none';
    if(recipientAddressError) recipientAddressError.style.display = 'none';
    if(quantityError) quantityError.style.display = 'none';
    if(productNameError) productNameError.style.display = 'none'; // Скрываем новую ошибку

    // В реальном приложении лучше использовать более надежный способ передачи данных,
    // например, через API или встраивание данных в HTML.
    const availableProducts = typeof window.products !== 'undefined' ? window.products : [];

    // Регулярные выражения
    const russianLettersRegex = /^[А-Яа-яЁё\s-]+$/;

    function populateProductTypes() {
        if (!productTypeSelect || availableProducts.length === 0) return;

        const categories = ['Все', ...new Set(availableProducts.map(p => p.category))];
        productTypeSelect.innerHTML = ''; // Очищаем предыдущие опции
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category === 'Все' ? '' : category;
            option.textContent = category;
            productTypeSelect.appendChild(option);
        });
    }

    function populateProductNames(selectedCategory = '') {
        productNameSelect.innerHTML = '<option value="">-- Выберите наименование --</option>';
        const filteredProducts = selectedCategory ? window.products.filter(p => p.category === selectedCategory) : window.products;

        filteredProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name; // Using name as value, could be ID if preferred
            option.textContent = `${product.name} (${product.price} ₽)`;
            option.dataset.productId = product.id; // Store ID for later use
            option.dataset.stock = product.stock; // Store stock here
            productNameSelect.appendChild(option);
        });
        productNameSelect.disabled = false;
        updateStockInfo(); // Update stock info when product names are populated
    }

    // NEW FUNCTION to update stock information display and quantity input
    function updateStockInfo() {
        const selectedOption = productNameSelect.options[productNameSelect.selectedIndex];
        if (selectedOption && selectedOption.dataset.productId) {
            const stock = parseInt(selectedOption.dataset.stock, 10);
            if (!isNaN(stock)) {
                quantityInput.max = stock;
                if (stock > 0) {
                    stockInfoMessage.textContent = `В наличии: ${stock} шт.`;
                    stockInfoMessage.style.color = 'green';
                    quantityInput.disabled = false;
                } else {
                    stockInfoMessage.textContent = 'Товара нет в наличии.';
                    stockInfoMessage.style.color = 'red';
                    quantityInput.value = ''; // Clear quantity if product is out of stock
                    quantityInput.disabled = true;
                }
            } else {
                stockInfoMessage.textContent = 'Информация о наличии недоступна.';
                stockInfoMessage.style.color = 'orange';
                quantityInput.max = ''; // Remove max if stock unknown
                quantityInput.disabled = false;
            }
        } else {
            stockInfoMessage.textContent = '';
            quantityInput.max = ''; // No product selected, remove max
            quantityInput.disabled = true; // Disable quantity if no product selected
        }
        validateQuantity(); // Re-validate quantity after stock info update
    }

    if (productTypeSelect) {
        productTypeSelect.addEventListener('change', () => {
            populateProductNames(productTypeSelect.value);
            // updateStockInfo(); // Already called by populateProductNames
        });
    }

    if (productNameSelect) {
        productNameSelect.addEventListener('change', updateStockInfo);
    }

    // Первоначальное заполнение
    populateProductTypes();
    // Initially disable product name and quantity until type is selected
    productNameSelect.disabled = true;
    quantityInput.disabled = true;
    stockInfoMessage.textContent = ''; // Clear stock message initially
    if(productNameError) productNameError.textContent = ''; // Очищаем текст новой ошибки

    function validateLastName() {
        if (!lastNameInput.value.trim()) {
            lastNameError.textContent = 'Фамилия обязательна для ввода.';
            lastNameError.style.display = 'block';
            return false;
        }
        if (!russianLettersRegex.test(lastNameInput.value)) {
            lastNameError.textContent = 'Фамилия должна содержать только русские буквы.';
            lastNameError.style.display = 'block';
            return false;
        }
        lastNameError.textContent = '';
        lastNameError.style.display = 'none';
        return true;
    }

    function validateProductName() {
        if (!productNameSelect.value) { // Проверяем, что значение не пустое (т.е. не "-- Выберите наименование --")
            productNameError.textContent = 'Пожалуйста, выберите наименование товара.';
            productNameError.style.display = 'block';
            return false;
        }
        productNameError.textContent = '';
        productNameError.style.display = 'none';
        return true;
    }

    function validatePassword() {
        if (!passwordInput.value) {
            passwordError.textContent = 'Пароль обязателен для ввода.';
            passwordError.style.display = 'block';
            return false;
        }
        if (passwordInput.value.length < 6) { // Пример минимальной длины
            passwordError.textContent = 'Пароль должен содержать не менее 6 символов.';
            passwordError.style.display = 'block';
            return false;
        }
        passwordError.textContent = '';
        passwordError.style.display = 'none';
        return true;
    }

    function validateRecipientAddress() {
        if (!recipientAddressInput.value.trim()) {
            recipientAddressError.textContent = 'Адрес получателя обязателен для ввода.';
            recipientAddressError.style.display = 'block';
            return false;
        }
        recipientAddressError.textContent = '';
        recipientAddressError.style.display = 'none';
        return true;
    }

    function validateQuantity() {
        const quantityError = document.getElementById('quantityError');
        const quantity = parseInt(quantityInput.value, 10);
        const maxStock = parseInt(quantityInput.max, 10); // max is set by updateStockInfo
        let errorMessage = '';

        // If input is disabled (e.g., product out of stock or no product selected), clear errors and return true.
        if (quantityInput.disabled) {
            quantityError.textContent = '';
            quantityError.classList.remove('visible');
            return true;
        }

        // If a product is selected and quantity input is enabled
        if (productNameSelect.value) { 
            if (isNaN(quantity) || quantity <= 0) {
                errorMessage = 'Количество должно быть положительным числом.';
            } else if (!isNaN(maxStock) && quantity > maxStock) {
                errorMessage = `Максимальное количество для заказа: ${maxStock} шт. В наличии ${maxStock}.`;
            } else if (isNaN(maxStock) && quantity > 0) {
                // This case means stock info might be unavailable, but user entered quantity.
                // Depending on policy, this could be an error or allowed with a warning.
                // For now, we'll assume if maxStock is NaN and input is enabled, it's okay unless there's a general limit.
                // No error message here for now.
            }
        } else if (quantityInput.value.trim() !== '') {
             // If no product is selected, but quantity is entered (should be disabled, but as a fallback)
            errorMessage = 'Сначала выберите товар.';
        }

        if (errorMessage) {
            quantityError.textContent = errorMessage;
            quantityError.classList.add('visible');
            return false;
        } else {
            quantityError.textContent = '';
            quantityError.classList.remove('visible');
            return true;
        }
    }

    // Добавляем слушатели для валидации при потере фокуса
    if (lastNameInput) lastNameInput.addEventListener('blur', validateLastName);
    if (passwordInput) passwordInput.addEventListener('blur', validatePassword);
    if (recipientAddressInput) recipientAddressInput.addEventListener('blur', validateRecipientAddress);
    if (quantityInput) quantityInput.addEventListener('blur', validateQuantity);
    if (productNameSelect) { 
        productNameSelect.addEventListener('blur', validateProductName); // Валидация при потере фокуса
        productNameSelect.addEventListener('change', () => {
             validateProductName(); // Валидируем выбор товара при его изменении
            // Сбросить ошибку или перевалидировать, если quantityInput уже имеет значение
            if (quantityInput.value) validateQuantity();
            else { // If quantity is empty, but product changed, ensure error is hidden
                 quantityError.textContent = '';
                 quantityError.style.display = 'none';
            }
        });
    }


    if (form) {
        form.addEventListener('submit', function (event) {
            // Выполняем все валидации перед отправкой
            const isLastNameValid = validateLastName();
            const isPasswordValid = validatePassword();
            const isRecipientAddressValid = validateRecipientAddress();
            const isQuantityValid = validateQuantity();
            const isProductNameValid = validateProductName(); // Новая валидация

            if (isLastNameValid && isPasswordValid && isRecipientAddressValid && isQuantityValid && isProductNameValid) {
                console.log('Форма заказа валидна, можно отправлять.');
                // Здесь будет логика отправки данных заказа
                const formData = {
                    lastName: lastNameInput.value,
                    // password: passwordInput.value, // Пароль обычно не отправляется в таком виде
                    recipientAddress: recipientAddressInput.value,
                    productType: productTypeSelect.value,
                    productId: productNameSelect.value,
                    productName: productNameSelect.options[productNameSelect.selectedIndex].text,
                    quantity: quantityInput.value,
                    deliveryMethod: form.elements.deliveryMethod.value,
                    cashPayment: form.elements.cashPayment.checked,
                    additionalInfo: form.elements.additionalInfo.value
                };
                console.log("Данные заказа:", formData);
                alert('Заказ отправлен! (Данные в консоли)'); 
                event.preventDefault(); // Пока не отправляем реально
                // form.reset(); // Можно раскомментировать после реальной отправки
            } else {
                console.log('Форма заказа содержит ошибки.');
                event.preventDefault(); // Предотвращаем отправку формы
            }
        });

        form.addEventListener('reset', function () {
            lastNameError.textContent = '';
            lastNameError.style.display = 'none';
            passwordError.textContent = '';
            passwordError.style.display = 'none';
            recipientAddressError.textContent = '';
            recipientAddressError.style.display = 'none';
            quantityError.textContent = '';
            quantityError.style.display = 'none';
            if(productNameError) { // Скрываем и очищаем ошибку для productName
                productNameError.textContent = '';
                productNameError.style.display = 'none';
            }
            // При сбросе формы также сбросить фильтр товаров
            if (productTypeSelect) productTypeSelect.value = '';
            populateProductNames(); // Показать все товары
        });
    }
}); 