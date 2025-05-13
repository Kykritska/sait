document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItemCountSpan = document.getElementById('cart-item-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    window.updateCartCountDisplay = function() {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = 0;
        currentCart.forEach(item => {
            totalItems += item.quantity || 0; // Sum up quantities
        });

        if (cartItemCountSpan) {
            cartItemCountSpan.textContent = totalItems;
            cartItemCountSpan.style.display = totalItems > 0 ? 'inline' : 'none';
        }
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

            const row = tbody.insertRow();
            row.className = 'cart-item-row';
            row.innerHTML = `
                <td class="cart-item-image-cell">
                    <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-image">
                </td>
                <td class="cart-item-name">${item.name}</td>
                <td class="cart-item-price">${item.price}₽</td>
                <td class="cart-item-quantity">
                    <button class="quantity-btn" data-index="${index}" data-action="decrease" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-index="${index}" data-action="increase">+</button>
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
        if (action === 'increase') {
            cart[index].quantity++;
        } else if (action === 'decrease' && cart[index].quantity > 1) {
            cart[index].quantity--;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCountDisplay();
    }

    window.removeFromCart = function(index) { // Made global for potential external calls if needed, though not used now
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCountDisplay();
    };

    renderCart();
    updateCartCountDisplay(); // Initial call
});
