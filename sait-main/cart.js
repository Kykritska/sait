document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    // const cartItemCountSpan = document.getElementById('cart-item-count'); // Old sidebar count
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Глобальная функция обновления счетчика корзины в хедере
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

    // Функция для отображения VIP предложения и управления им
    function displayVipOffer(total) {
        const vipOfferSection = document.getElementById('vip-offer-section');
        if (!vipOfferSection) return;

        const isVip = localStorage.getItem('isVIP') === 'true';
        const vipThreshold = 800000;
        const vipDiscountPercent = localStorage.getItem('vipDiscountPercent') || '30';

        if (isVip) {
            vipOfferSection.innerHTML = `
                <p style="color: green; font-weight: bold;">⭐ VIP-карта активна! Ваша постоянная скидка ${vipDiscountPercent}% уже применяется.</p>
            `;
            vipOfferSection.style.display = 'block';
        } else if (total >= vipThreshold) {
            vipOfferSection.innerHTML = `
                <h4>🎉 Поздравляем!</h4>
                <p>Ваша сумма покупки (${total.toLocaleString('ru-RU')}₽) достигла ${vipThreshold.toLocaleString('ru-RU')}₽.</p>
                <p>Нажмите кнопку ниже, чтобы <strong>активировать VIP-карту</strong> и получить постоянную скидку <strong>${vipDiscountPercent}%</strong> на все текущие и последующие заказы!</p>
                <button id="activate-vip-btn" class="btn btn-success" style="margin-top: 10px;">Активировать VIP-карту (скидка ${vipDiscountPercent}%)</button>
            `;
            vipOfferSection.style.display = 'block';

            const activateVipBtn = document.getElementById('activate-vip-btn');
            if (activateVipBtn) {
                activateVipBtn.addEventListener('click', () => {
                    localStorage.setItem('isVIP', 'true');
                    localStorage.setItem('vipDiscountPercent', vipDiscountPercent);
                    vipOfferSection.innerHTML = `
                        <p style="color: green; font-weight: bold;">✅ VIP-карта успешно активирована!</p>
                        <p>Ваша скидка ${vipDiscountPercent}% будет автоматически применена.</p>
                        <p><em>Цены в корзине и каталоге обновлены.</em></p>
                    `;
                    renderCart();
                    if (window.renderCatalog) {
                        window.renderCatalog();
                    }
                    if (window.displayVipStatus) {
                        window.displayVipStatus();
                    }
                    updateCartCountDisplay();
                }, { once: true });
            }
        } else {
            vipOfferSection.style.display = 'none';
            vipOfferSection.innerHTML = '';
        }
    }
    
    // Функция обновления итоговой суммы в корзине и вызова VIP предложения
    function updateCartTotalDisplay(total) {
        const cartTotalPriceEl = document.getElementById('cart-total-price');
        if (cartTotalPriceEl) {
            cartTotalPriceEl.textContent = `${total.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₽`;
        }
        displayVipOffer(total);
    }

    function renderCart() {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty-message">Корзина пуста.</p>';
            updateCartTotalDisplay(0);
            // Убедимся, что VIP-предложение скрыто, если корзина пуста
            const vipOfferSection = document.getElementById('vip-offer-section');
            if (vipOfferSection) {
                vipOfferSection.style.display = 'none';
                vipOfferSection.innerHTML = '';
            }
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
        const isVipActive = localStorage.getItem('isVIP') === 'true';
        const vipDiscountRate = isVipActive ? (parseFloat(localStorage.getItem('vipDiscountPercent')) / 100) || 0.30 : 0;

        cart.forEach((item, index) => {
            let currentItemPrice = parseFloat(item.price);
            let originalItemPriceHTML = '';

            if (isVipActive) {
                const discountedPrice = currentItemPrice * (1 - vipDiscountRate);
                originalItemPriceHTML = `<span class="original-price" style="text-decoration: line-through; color: grey; font-size: 0.9em; margin-left: 5px;">${currentItemPrice.toLocaleString('ru-RU')}₽</span>`;
                currentItemPrice = discountedPrice;
            }
            
            const itemTotal = currentItemPrice * item.quantity;
            grandTotal += itemTotal;

            const productInStock = window.products ? window.products.find(p => p.id === item.id) : null;
            const currentStock = productInStock ? productInStock.stock : Infinity;
            
            const row = tbody.insertRow();
            row.className = 'cart-item-row';
            row.innerHTML = `
                <td class="cart-item-image-cell">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                </td>
                <td class="cart-item-name">${item.name}</td>
                <td class="cart-item-price">${currentItemPrice.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₽ ${originalItemPriceHTML}</td>
                <td class="cart-item-quantity">
                    <button class="quantity-btn" data-index="${index}" data-action="decrease" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-index="${index}" data-action="increase" ${item.quantity >= currentStock ? 'disabled' : ''}>+</button>
                </td>
                <td class="cart-item-subtotal">${itemTotal.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₽</td>
                <td class="cart-item-remove">
                    <button class="remove-btn" data-index="${index}">Удалить</button>
                </td>
            `;
        });

        cartItemsContainer.appendChild(cartTable);
        updateCartTotalDisplay(grandTotal);

        const existingCheckoutBtn = cartItemsContainer.querySelector('.cart-checkout-btn');
        if (existingCheckoutBtn) {
            existingCheckoutBtn.remove();
        }

        if (cart.length > 0) {
            const buyBtn = document.createElement('button');
            buyBtn.textContent = 'Оформить заказ';
            buyBtn.className = 'cart-checkout-btn';
            buyBtn.style.marginTop = '20px';
            buyBtn.onclick = () => {
                if (cart.length > 0) {
                    const finalIsVip = localStorage.getItem('isVIP') === 'true';
                    const finalDiscountRate = finalIsVip ? (parseFloat(localStorage.getItem('vipDiscountPercent')) / 100) || 0.30 : 0;
                    let orderTotal = 0;
                    // Пересчитываем сумму заказа на основе ТЕКУЩЕЙ корзины из localStorage, чтобы учесть VIP активацию в этом сеансе
                    const currentCartState = JSON.parse(localStorage.getItem('cart')) || [];
                    currentCartState.forEach(cartItem => {
                        let priceForTotal = parseFloat(cartItem.price);
                        if (finalIsVip) {
                             priceForTotal = priceForTotal * (1 - finalDiscountRate);
                        }
                        orderTotal += priceForTotal * cartItem.quantity;
                    });

                    alert(`Спасибо за покупку! Ваш заказ на сумму ${orderTotal.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₽ оформлен.`);
                    
                    cart = [];
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                    updateCartCountDisplay();
                } else {
                    alert('Ваша корзина пуста.');
                }
            };
            // Вставляем кнопку "Оформить заказ" ПОСЛЕ VIP блока (если он есть и видим) или после таблицы
            const vipSection = document.getElementById('vip-offer-section');
            if (vipSection && vipSection.style.display !== 'none' && vipSection.parentNode === cartItemsContainer) {
                 vipSection.insertAdjacentElement('afterend', buyBtn);
            } else {
                 cartTable.insertAdjacentElement('afterend', buyBtn);
            }
        }

        addCartEventListeners();
        updateCartCountDisplay();
    }

    function addCartEventListeners() {
        // Используем делегирование событий на cartItemsContainer для динамически добавляемых кнопок
        cartItemsContainer.addEventListener('click', function(event) {
            const target = event.target;
            if (target.classList.contains('quantity-btn')) {
                const index = parseInt(target.dataset.index);
                const action = target.dataset.action;
                updateQuantity(index, action);
            } else if (target.classList.contains('remove-btn')) {
                const index = parseInt(target.dataset.index);
                removeFromCart(index);
            }
        });
    }

    function updateQuantity(index, action) {
        const cartItem = cart[index];
        if (!cartItem) return;

        const productInCatalog = window.products ? window.products.find(p => p.id === cartItem.id) : null;
        if (!productInCatalog) {
            const message = 'Ошибка: Информация о товаре не найдена.';
            if (window.showToastNotification) { window.showToastNotification(message, 'error'); } else { alert(message); }
            return;
        }

        if (action === 'increase') {
            if (productInCatalog.stock <= 0) {
                const message = `Невозможно увеличить количество "${productInCatalog.name}". Товар закончился.`;
                if (window.showToastNotification) { window.showToastNotification(message); } else { alert(message); }
                return;
            }
            productInCatalog.stock--;
            cartItem.quantity++;
        } else if (action === 'decrease') {
            if (cartItem.quantity > 1) {
                productInCatalog.stock++;
                cartItem.quantity--;
            } else {
                return;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCountDisplay();
        if (window.updateProductDisplayInCatalog) {
            window.updateProductDisplayInCatalog(cartItem.id);
        }
    }

    window.removeFromCart = function(index) {
        const removedItem = cart[index];
        if (!removedItem) return;

        const productInCatalog = window.products ? window.products.find(p => p.id === removedItem.id) : null;
        if (productInCatalog) {
            productInCatalog.stock += removedItem.quantity;
        }
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCountDisplay();
        if (productInCatalog && window.updateProductDisplayInCatalog) {
            window.updateProductDisplayInCatalog(removedItem.id);
        }
    };

    renderCart();
    updateCartCountDisplay(); // Initial call
});
