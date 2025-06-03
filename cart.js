document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    // const cartItemCountSpan = document.getElementById('cart-item-count'); // Old sidebar count
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // This function is also defined in script.js, ensure consistency or use the global one from script.js
    // For now, let's make it consistent with the header cart count ID.
    window.updateCartCountDisplay = function() {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = 0;
        currentCart.forEach(item => {
            totalItems += item.quantity || 0;
        });

        const cartItemCountSpanHeader = document.getElementById('cart-item-count-header');
        if (cartItemCountSpanHeader) {
            cartItemCountSpanHeader.textContent = totalItems;
            cartItemCountSpanHeader.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
        
        // If there was an old sidebar counter, we might want to update it too or remove its logic
        // const oldCartItemCountSpan = document.getElementById('cart-item-count');
        // if (oldCartItemCountSpan) { /* ... update or hide ... */ }
    };

    function renderCart() {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty-message">Корзина пуста.</p>';
            updateCartTotalDisplay(0);
            return;
        }

        const cartTable = document.createElement('table');
        cartTable.className = 'cart-table';
        cartTable.innerHTML = `
            <thead>
                <tr>
                    <th>Товар</th>
                    <th></th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" style="text-align: right;"><strong>Итого:</strong></td>
                    <td id="cart-total-price">0₽</td>
                    <td></td>
                </tr>
            </tfoot>
        `;
        const tbody = cartTable.querySelector('tbody');

        let grandTotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;

            const productInStock = window.products ? window.products.find(p => p.id === item.id) : null;
            // Если товар по какой-то причине не найден в window.products (например, был удален из каталога после добавления в корзину),
            // currentStock будет Infinity, что позволит изменять количество, но это редкий крайний случай.
            // В идеале, такие товары нужно было бы обрабатывать отдельно (например, удалять из корзины или помечать как недоступные).
            const currentStock = productInStock ? productInStock.stock : Infinity;
            
            const row = tbody.insertRow();
            row.className = 'cart-item-row';
            row.innerHTML = `
                <td class="cart-item-image-cell">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                </td>
                <td class="cart-item-name">${item.name}</td>
                <td class="cart-item-price">${item.price}₽</td>
                <td class="cart-item-quantity">
                    <button class="quantity-btn" data-index="${index}" data-action="decrease" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-index="${index}" data-action="increase" ${item.quantity >= currentStock ? 'disabled' : ''}>+</button>
                </td>
                <td class="cart-item-subtotal">${itemTotal}₽</td>
                <td class="cart-item-remove">
                    <button class="remove-btn" data-index="${index}">Удалить</button>
                </td>
            `;
        });

        cartItemsContainer.appendChild(cartTable);
        updateCartTotalDisplay(grandTotal);

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Оформить заказ';
        buyBtn.className = 'cart-checkout-btn';
        buyBtn.onclick = () => {
            if (cart.length > 0) {
                alert('Спасибо за покупку! Ваш заказ оформлен.');
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(); // Re-render to show empty cart
                updateCartCountDisplay(); // Update badge
            } else {
                alert('Ваша корзина пуста.');
            }
        };
        cartItemsContainer.appendChild(buyBtn);

        addCartEventListeners();
        updateCartCountDisplay();
    }

    function updateCartTotalDisplay(total) {
        const cartTotalPriceEl = document.getElementById('cart-total-price');
        if (cartTotalPriceEl) {
            cartTotalPriceEl.textContent = `${total}₽`;
        }
    }
    
    function addCartEventListeners() {
        const quantityButtons = cartItemsContainer.querySelectorAll('.quantity-btn');
        const removeButtons = cartItemsContainer.querySelectorAll('.remove-btn');

        quantityButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                const action = e.target.dataset.action;
                updateQuantity(index, action);
            });
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                removeFromCart(index);
            });
        });
    }

    function updateQuantity(index, action) {
        const cartItem = cart[index];
        if (!cartItem) {
            console.error("Cart item not found at index:", index);
            return;
        }

        const productInCatalog = window.products ? window.products.find(p => p.id === cartItem.id) : null;

        if (!productInCatalog) {
            console.error(`Product with id ${cartItem.id} not found in window.products. Cannot update quantity in cart.`);
            if (window.showToastNotification) {
                window.showToastNotification('Ошибка: Информация о товаре не найдена, количество не обновлено.', 'error');
            } else {
                alert('Ошибка: Информация о товаре не найдена, количество не обновлено.');
            }
            return;
        }

        if (action === 'increase') {
            // Проверяем, есть ли ЕЩЕ товар на складе (productInCatalog.stock это УЖЕ уменьшенный остаток)
            // Нам нужно проверить, что productInCatalog.stock (текущий остаток на складе) > 0
            if (typeof productInCatalog.stock === 'number' && productInCatalog.stock <= 0) {
                 if (window.showToastNotification) {
                     window.showToastNotification(`Невозможно увеличить количество \"${productInCatalog.name}\". Товар закончился на складе.`);
                } else {
                    alert(`Невозможно увеличить количество \"${productInCatalog.name}\". Товар закончился на складе.`);
                }
                // Убедимся, что кнопка "+" в корзине заблокирована, если stock стал 0
                // Это должно произойти при renderCart(), но на всякий случай
                renderCart(); 
                return; 
            }
            
            // Уменьшаем stock в window.products
            productInCatalog.stock -= 1;
            cartItem.quantity++;

        } else if (action === 'decrease') {
            if (cartItem.quantity > 1) {
                // Увеличиваем stock в window.products
                productInCatalog.stock += 1;
                cartItem.quantity--;
            } else {
                return; // Уже 1, дальше не уменьшаем
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); 
        if (window.updateCartCountDisplay) {
            window.updateCartCountDisplay();
        }
        // Обновляем отображение товара в каталоге, если функция доступна
        if (window.updateProductDisplayInCatalog) {
            window.updateProductDisplayInCatalog(cartItem.id);
        }
    }

    window.removeFromCart = function(index) {
        const removedItem = cart[index];
        if (!removedItem) {
            console.error("Item to remove not found at index:", index);
            return;
        }

        const productInCatalog = window.products ? window.products.find(p => p.id === removedItem.id) : null;

        if (productInCatalog) {
            // Возвращаем количество удаленного товара на "склад" в window.products
            productInCatalog.stock += removedItem.quantity;
        } else {
            console.warn(`[removeFromCart] Product with id ${removedItem.id} not found in window.products. Stock not restored.`);
        }

        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        if (window.updateCartCountDisplay) {
            window.updateCartCountDisplay();
        }
        // Обновляем отображение товара в каталоге
        if (productInCatalog && window.updateProductDisplayInCatalog) {
            window.updateProductDisplayInCatalog(removedItem.id);
        }
    };

    renderCart();
    updateCartCountDisplay(); // Initial call
});
