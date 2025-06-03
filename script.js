// Глобальный массив товаров, доступный другим скриптам
window.products = [
    {
        id: 1,
        name: "Игровой ПК \"Норд\", Intel Core i5, RTX 3060, 16GB RAM, 1TB SSD",
        category: "Готовые сборки ПК",
        brand: "Custom Build",
        price: 85500,
        originalPrice: 95000,
        image: "rtx3060.png",
        description: "Мощный игровой компьютер для современных игр в Full HD и 2K разрешении.",
        featured: true,
        characteristics: {
            "Процессор": "Intel Core i5-12400F",
            "Видеокарта": "NVIDIA GeForce RTX 3060 12GB",
            "Оперативная память": "16GB DDR4 3200MHz",
            "Накопитель": "1TB NVMe SSD",
            "Материнская плата": "B660 Chipset",
            "Блок питания": "650W 80+ Bronze"
        },
        stock: 10
    },
    {
        id: 2,
        name: "Мышь Razer DeathAdder V2",
        category: "Периферия",
        brand: "Razer",
        price: 4500,
        image: "Мышь Razer DeathAdder V2.jpg",
        description: "Эргономичная игровая мышь с оптическим сенсором Focus+.",
        featured: false,
        characteristics: {
            "Тип сенсора": "Оптический, Razer Focus+",
            "Разрешение": "20000 DPI",
            "Количество кнопок": "8",
            "Подсветка": "Razer Chroma RGB"
        },
        stock: 25
    },
    {
        id: 3,
        name: "Монитор AOC 24G2",
        category: "Мониторы",
        brand: "AOC",
        price: 18000,
        image: "Монитор AOC 24G2.png",
        description: "23.8-дюймовый игровой монитор с IPS матрицей и частотой обновления 144 Гц.",
        featured: true,
        characteristics: {
            "Диагональ": "23.8 дюйма",
            "Матрица": "IPS",
            "Разрешение": "1920x1080 (Full HD)",
            "Частота обновления": "144 Гц",
            "Время отклика": "1 мс (MPRT)"
        },
        stock: 0
    },
    {
        id: 4,
        name: "Клавиатура HyperX Alloy Origins Core",
        category: "Периферия",
        brand: "HyperX",
        price: 7200,
        image: "HyperX Alloy Origins Core.webp",
        description: "Механическая игровая клавиатура с переключателями HyperX Red.",
        featured: false,
        characteristics: {
            "Тип клавиатуры": "Механическая",
            "Переключатели": "HyperX Red (линейные)",
            "Подсветка": "RGB",
            "Материал корпуса": "Алюминий"
        },
        stock: 15
    },
    {
        id: 5,
        name: "Наушники Sony WH-1000XM4",
        category: "Аудио",
        brand: "Sony",
        price: 28000,
        image: "Наушники Sony WH-1000XM4.jpg",
        description: "Беспроводные наушники с активным шумоподавлением.",
        featured: false,
        characteristics: {
            "Тип": "Полноразмерные, закрытые",
            "Подключение": "Bluetooth, NFC, аудиокабель",
            "Шумоподавление": "Активное (HD Noise Cancelling Processor QN1)",
            "Время работы": "До 30 часов"
        },
        stock: 8
    },
    {
        id: 6,
        name: "Материнская плата ASUS PRIME Z690-P",
        category: "Комплектующие",
        brand: "ASUS",
        price: 19500,
        image: "Материнская плата ASUS PRIME Z690-P.jpg",
        description: "Материнская плата LGA1700 для процессоров Intel 12-го поколения.",
        characteristics: {
            "Сокет": "LGA1700",
            "Чипсет": "Intel Z690",
            "Форм-фактор": "ATX",
            "Поддержка памяти": "DDR5"
        },
        stock: 12
    },
    {
        id: 7,
        name: "Оперативная память Kingston Fury Beast Black 16GB DDR4 Kit",
        category: "Комплектующие",
        brand: "Kingston",
        price: 6800,
        image: "Оперативная память Kingston 16GB DDR4.jpg",
        description: "Комплект из двух модулей по 8GB, частота 3200MHz, CL16.",
        characteristics: {
            "Тип памяти": "DDR4",
            "Объем": "16GB (2x8GB)",
            "Частота": "3200 МГц",
            "Тайминги": "CL16"
        },
        stock: 30
    },
    {
        id: 8,
        name: "SSD Samsung 970 EVO Plus 1TB",
        category: "Комплектующие",
        brand: "Samsung",
        price: 11000,
        image: "SSD Samsung 970 EVO Plus 1TB.jpg",
        description: "NVMe M.2 SSD накопитель с высокой скоростью чтения и записи.",
        featured: true,
        characteristics: {
            "Форм-фактор": "M.2 2280",
            "Интерфейс": "NVMe PCIe Gen 3.0 x4",
            "Скорость чтения": "до 3500 МБ/с",
            "Скорость записи": "до 3300 МБ/с"
        },
        stock: 18
    },
    {
        id: 9,
        name: "Блок питания Corsair RM750x (750W)",
        category: "Комплектующие",
        brand: "Corsair",
        price: 9200,
        image: "Блок питания Corsair RM750x.jpg",
        description: "Модульный блок питания 750W с сертификатом 80 PLUS Gold.",
        characteristics: {
            "Мощность": "750 Вт",
            "Сертификат": "80 PLUS Gold",
            "Модульность": "Полностью модульный"
        },
        stock: 7
    },
    {
        id: 10,
        name: "Корпус NZXT H510 Flow",
        category: "Комплектующие",
        brand: "NZXT",
        price: 7000,
        image: "Корпус NZXT H510.jpg",
        description: "Компактный Mid-Tower корпус с хорошей вентиляцией.",
        characteristics: {
            "Типоразмер": "Mid-Tower",
            "Материал": "Сталь, закаленное стекло",
            "Поддержка мат. плат": "ATX, Micro-ATX, Mini-ITX"
        },
        stock: 0
    },
    {
        id: 11,
        name: "Игровой ноутбук ASUS ROG Strix G15",
        category: "Ноутбуки",
        brand: "ASUS",
        price: 125000,
        originalPrice: 135000,
        image: "placeholder-image.png",
        description: "Мощный игровой ноутбук с Ryzen 9 и RTX 3070.",
        featured: true,
        characteristics: {
            "Процессор": "AMD Ryzen 9 5900HX",
            "Видеокарта": "NVIDIA GeForce RTX 3070 Laptop",
            "Экран": "15.6 Full HD 144Hz",
            "Оперативная память": "16GB DDR4",
            "Накопитель": "1TB NVMe SSD"
        },
        stock: 5
    },
    {
        id: 12,
        name: "Смартфон Apple iPhone 14 Pro",
        category: "Смартфоны",
        brand: "Apple",
        price: 110000,
        image: "placeholder-image.png",
        description: "Последняя модель iPhone с улучшенной камерой и дисплеем ProMotion.",
        characteristics: {
            "Дисплей": "6.1 Super Retina XDR, ProMotion",
            "Процессор": "A16 Bionic",
            "Камера": "48МП основная + 12МП сверхширокоугольная + 12МП телефото",
            "Память": "256GB"
        },
        stock: 20
    },
    {
        id: 13,
        name: "Планшет Samsung Galaxy Tab S8",
        category: "Планшеты",
        brand: "Samsung",
        price: 65000,
        image: "Samsung Galaxy Tab S8.webp",
        description: "Производительный планшет на Android с поддержкой S Pen.",
        characteristics: {
            "Дисплей": "11 LTPS TFT, 120Hz",
            "Процессор": "Snapdragon 8 Gen 1",
            "Память": "8GB RAM, 128GB Storage",
            "Батарея": "8000 mAh"
        },
        stock: 10
    },
    {
        id: 14,
        name: "Экшн-камера GoPro HERO11 Black",
        category: "Фото и видео",
        brand: "GoPro",
        price: 42000,
        image: "GoPro HERO11 Black.webp",
        description: "Новая экшн-камера с улучшенной стабилизацией и качеством видео.",
        characteristics: {
            "Видео": "5.3K60, 4K120",
            "Фото": "27MP",
            "Стабилизация": "HyperSmooth 5.0",
            "Водонепроницаемость": "до 10м"
        },
        stock: 0
    },
    {
        id: 15,
        name: "Роутер Keenetic Giga (KN-1011)",
        category: "Сетевое оборудование",
        brand: "Keenetic",
        price: 8500,
        image: "Keenetic Giga (KN-1011).webp",
        description: "Двухдиапазонный гигабитный интернет-центр с Wi-Fi AC1300.",
        characteristics: {
            "Стандарт Wi-Fi": "802.11ac Wave 2 (Wi-Fi 5)",
            "Частотные диапазоны": "2.4 ГГц, 5 ГГц",
            "Скорость портов WAN/LAN": "1 Гбит/с",
            "USB-порт": "Да, 3.0"
        },
        stock: 22
    },
    {
        id: 16,
        name: "Новый Продукт 16 (Монитор)",
        category: "Мониторы",
        brand: "Dell",
        price: 16000,
        image: "Монитор Dell 27 S2721DGF.jpg",
        description: "Описание для нового продукта 16.",
        featured: false,
        characteristics: {
            "Параметр1": "Значение1",
            "Параметр2": "Значение2"
        },
        stock: 16
    },
    {
        id: 17,
        name: "Супер Гаджет 17 (Кулер)",
        category: "Комплектующие",
        brand: "Cooler Master",
        price: 17700,
        image: "Кулер Cooler Master Hyper 212 EVO.jpg",
        description: "Удивительный новый гаджет номер 17.",
        featured: true,
        characteristics: {
            "ФункцияX": "Есть",
            "Батарея": "Долгоиграющая"
        },
        stock: 17
    },
    {
        id: 18,
        name: "Последнее Устройство 18 (Мат. плата)",
        category: "Комплектующие",
        brand: "MSI",
        price: 18500,
        image: "Материнская плата MSI MPG B550 GAMING PLUS.png",
        description: "Самое последнее устройство в нашем каталоге (18).",
        featured: false,
        characteristics: {
            "Особенность": "Уникальная",
            "Размер": "Компактный"
        },
        stock: 0 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productListContainer = document.getElementById('product-list');
    const featuredProductsContainer = document.getElementById('featured-products-list');
    const categoryFilter = document.getElementById('category-filter');
    const brandFilter = document.getElementById('brand-filter');
    const priceRange = document.getElementById('price-range');
    const priceRangeValue = document.getElementById('price-range-value');
    const sortOrder = document.getElementById('sort-order');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const productList = document.getElementById('product-list');
    const sortSelect = document.getElementById('sort');
    const brandFilterSelect = document.getElementById('brand-filter');
    const categoryFilterSelect = document.getElementById('category-filter');
    const priceRangeInput = document.getElementById('price-range');
    const priceRangeValueSpan = document.getElementById('price-range-value');
    const featuredProductGrid = document.querySelector('.featured-products .product-grid');
    const searchFormHeader = document.querySelector('.site-header .search-form');
    const searchInputHeader = searchFormHeader?.querySelector('input[name="search"]');
    const catalogSearchInfo = document.getElementById('catalog-search-info');
    const paginationControlsContainer = document.getElementById('pagination-controls');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let lazyImageObserver = null;
    let currentSearchTerm = '';
    let currentPage = 1;
    const itemsPerPage = 6;

    const lazyLoadCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                if (typeof lazyImage.dataset.src === 'string' && lazyImage.dataset.src.trim() !== '') {
                    lazyImage.src = lazyImage.dataset.src;
                }
                lazyImage.classList.remove('lazy');
                lazyImage.classList.add('lazy-loaded');
                observer.unobserve(lazyImage);
            }
        });
    };

    const initializeLazyObserver = () => {
        if (lazyImageObserver || !('IntersectionObserver' in window)) {
            if (!('IntersectionObserver' in window)) {
                const lazyImages = document.querySelectorAll('img.lazy');
                lazyImages.forEach((lazyImage) => {
                    if (typeof lazyImage.dataset.src === 'string' && lazyImage.dataset.src.trim() !== '') {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy');
                        lazyImage.classList.add('lazy-loaded');
                    } else if (lazyImage.src && lazyImage.classList.contains('lazy')) {
                        lazyImage.classList.remove('lazy');
                        lazyImage.classList.add('lazy-loaded');
                    }
                });
            }
            return;
        }
        lazyImageObserver = new IntersectionObserver(lazyLoadCallback);
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach((lazyImage) => {
            lazyImageObserver.observe(lazyImage);
        });
    };

    function updateCartCountDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountSpanHeader = document.getElementById('cart-item-count-header');
        if (cartCountSpanHeader) {
            cartCountSpanHeader.textContent = totalItems;
        }
    }
    window.updateCartCountDisplay = updateCartCountDisplay;

    // НОВАЯ ФУНКЦИЯ для обновления отображения ОДНОГО товара в каталоге
    function updateProductDisplayInCatalog(productId) {
        const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
        if (!productCard) {
            // Карточка товара может быть не видна (например, на другой странице пагинации или отфильтрована)
            return;
        }

        const product = window.products.find(p => p.id === productId);
        if (!product) {
            console.error(`[updateProductDisplayInCatalog] Product with id ${productId} not found in window.products.`);
            return;
        }

        const stockElement = productCard.querySelector('.product-stock');
        const addToCartButton = productCard.querySelector('.add-to-cart-btn');

        if (stockElement) {
            if (typeof product.stock !== 'undefined') {
                if (product.stock > 0) {
                    stockElement.innerHTML = `<p class="product-stock in-stock">В наличии: ${product.stock} шт.</p>`;
                    stockElement.className = 'product-stock in-stock'; // Убедимся, что класс правильный
                } else {
                    stockElement.innerHTML = `<p class="product-stock out-of-stock">Нет в наличии</p>`;
                    stockElement.className = 'product-stock out-of-stock';
                }
            } else {
                stockElement.innerHTML = `<p class="product-stock unknown-stock">Наличие уточняется</p>`;
                stockElement.className = 'product-stock unknown-stock';
            }
        }

        if (addToCartButton) {
            if (product.stock > 0) {
                addToCartButton.textContent = 'Добавить в корзину';
                addToCartButton.disabled = false;
            } else {
                addToCartButton.textContent = 'Нет в наличии';
                addToCartButton.disabled = true;
            }
        }
    }
    window.updateProductDisplayInCatalog = updateProductDisplayInCatalog; // Делаем доступной глобально

    function renderProducts(container, productArray, isFeatured = false) {
        if (!container) return;
        container.innerHTML = '';
        const productsToRender = isFeatured ? productArray.filter(p => p.featured).slice(0, 4) : productArray;

        if (productsToRender.length === 0 && !isFeatured) {
            container.innerHTML = '<p class="no-products-message">Товары не найдены. Попробуйте изменить критерии фильтрации.</p>';
            return;
        }
        if (productsToRender.length === 0 && isFeatured) {
             container.innerHTML = '<p class="no-products-message">Рекомендуемые товары скоро появятся!</p>';
            return;
        }

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.productId = product.id;
            productCard.classList.add('product-card-visible'); // Start as visible

            let priceHTML = `<p class="product-price">${product.price.toLocaleString('ru-RU')} ₽</p>`;
            if (product.originalPrice && product.originalPrice > product.price) {
                priceHTML = `
                    <p class="product-price">
                        <span class="current-price">${product.price.toLocaleString('ru-RU')} ₽</span>
                        <span class="original-price">${product.originalPrice.toLocaleString('ru-RU')} ₽</span>
                    </p>`;
            }

            let stockStatusHTML = '';
            let addToCartButtonDisabled = false;
            let addToCartButtonText = 'Добавить в корзину';

            if (typeof product.stock !== 'undefined') {
                if (product.stock > 0) {
                    stockStatusHTML = `<p class="product-stock in-stock">В наличии: ${product.stock} шт.</p>`;
                } else {
                    stockStatusHTML = `<p class="product-stock out-of-stock">Нет в наличии</p>`;
                    addToCartButtonDisabled = true;
                    addToCartButtonText = 'Нет в наличии';
                }
            } else {
                stockStatusHTML = `<p class="product-stock unknown-stock">Наличие уточняется</p>`;
            }

            // Используем product.image напрямую, если это полный путь или имя файла в той же директории
            // Если у вас изображения в подпапке, например 'images/', то будет: `images/${product.image}`
            const imageUrl = product.image; // Предполагаем, что product.image содержит корректный путь или имя файла

            productCard.innerHTML = `
                <a href="#" class="product-card-link" data-id="${product.id}">
                    <div class="product-image-container">
                        <img src="${imageUrl}" alt="${product.name}" class="product-image lazy" loading="lazy">
                    </div>
                    <h3>${product.name}</h3>
                </a>
                <p class="product-category">Категория: ${product.category}</p>
                <p class="product-description">${product.description.substring(0,100)}${product.description.length > 100 ? '...' : ''}</p>
                ${priceHTML}
                ${stockStatusHTML} 
                <div class="product-card-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}" ${addToCartButtonDisabled ? 'disabled' : ''}>
                        ${addToCartButtonText}
                    </button>
                     <button class="details-btn" data-id="${product.id}">Подробнее</button>
                </div>
            `;
            container.appendChild(productCard);

            // Add event listeners for the new buttons
            const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent card link navigation
                    const productId = parseInt(event.target.dataset.id);
                    addToCart(productId);
                });
            }

            const detailsBtn = productCard.querySelector('.details-btn');
            if (detailsBtn) {
                detailsBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent card link navigation
                    const productId = parseInt(event.target.dataset.id);
                    showProductDetails(productId);
                });
            }

            const productLink = productCard.querySelector('.product-card-link');
            if (productLink) {
                productLink.addEventListener('click', (event) => {
                    event.preventDefault(); // Prevent default link behavior
                    const productId = parseInt(event.currentTarget.dataset.id);
                    showProductDetails(productId);
                });
            }
        });
    }

    function populateBrandFilter() {
        if (!brandFilterSelect) return;
        const availableProducts = currentSearchTerm
            ? window.products.filter(product => 
                product.name.toLowerCase().includes(currentSearchTerm) || 
                product.description.toLowerCase().includes(currentSearchTerm) ||
                product.brand?.toLowerCase().includes(currentSearchTerm) ||
                product.category?.toLowerCase().includes(currentSearchTerm) ||
                (product.characteristics && Object.values(product.characteristics).some(val => 
                    String(val).toLowerCase().includes(currentSearchTerm)
                ))
            )
            : window.products;

        const brands = [...new Set(availableProducts.map(product => product.brand).filter(brand => brand))];
        brands.sort();

        brandFilterSelect.length = 1; 

        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilterSelect.appendChild(option);
        });
    }

    function populateCategoryFilter() {
        if (!categoryFilterSelect) return;
        const availableProducts = currentSearchTerm
            ? window.products.filter(product => 
                product.name.toLowerCase().includes(currentSearchTerm) || 
                product.description.toLowerCase().includes(currentSearchTerm) ||
                product.brand?.toLowerCase().includes(currentSearchTerm) ||
                product.category?.toLowerCase().includes(currentSearchTerm) ||
                (product.characteristics && Object.values(product.characteristics).some(val => 
                    String(val).toLowerCase().includes(currentSearchTerm)
                ))
            )
            : window.products;

        const categories = [...new Set(availableProducts.map(product => product.category).filter(cat => cat))];
        categories.sort();

        categoryFilterSelect.length = 1;

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilterSelect.appendChild(option);
        });
    }

    function renderPaginationControls(totalItems) {
        if (!paginationControlsContainer) return;
        paginationControlsContainer.innerHTML = '';

        const totalPages = Math.ceil(totalItems / itemsPerPage);

        if (totalPages <= 1) return;

        const createButton = (pageNumber, text = pageNumber, isActive = false, isDisabled = false) => {
            const button = document.createElement('button');
            button.textContent = text;
            button.disabled = isDisabled;
            if (isActive) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                if (typeof pageNumber === 'number') {
                    currentPage = pageNumber;
                    renderCatalog();
                    window.scrollTo(0, productList.offsetTop - 100);
                }
            });
            return button;
        };

        const createEllipsis = () => {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'pagination-ellipsis';
            return ellipsis;
        };

        paginationControlsContainer.appendChild(createButton(currentPage - 1, 'Назад', false, currentPage === 1));

        const maxPagesToShow = 5;
        const pagesAroundCurrent = 1;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                paginationControlsContainer.appendChild(createButton(i, i, i === currentPage));
            }
        } else {
            paginationControlsContainer.appendChild(createButton(1, 1, 1 === currentPage));

            if (currentPage > pagesAroundCurrent + 2) {
                paginationControlsContainer.appendChild(createEllipsis());
            }

            const startPage = Math.max(2, currentPage - pagesAroundCurrent);
            const endPage = Math.min(totalPages - 1, currentPage + pagesAroundCurrent);

            for (let i = startPage; i <= endPage; i++) {
                paginationControlsContainer.appendChild(createButton(i, i, i === currentPage));
            }

            if (currentPage < totalPages - pagesAroundCurrent - 1) {
                paginationControlsContainer.appendChild(createEllipsis());
            }

            paginationControlsContainer.appendChild(createButton(totalPages, totalPages, totalPages === currentPage));
        }

        paginationControlsContainer.appendChild(createButton(currentPage + 1, 'Вперед', false, currentPage === totalPages));
    }

    function renderCatalog() {
        if (!productList || !sortSelect || !brandFilterSelect || !categoryFilterSelect || !priceRangeInput || !priceRangeValueSpan) return;

        console.log('[DEBUG] Initial window.products length:', window.products.length);

        if (catalogSearchInfo) {
             if (currentSearchTerm) {
                 const displayTerm = searchInputHeader?.value || currentSearchTerm;
                 catalogSearchInfo.textContent = `Результаты поиска по запросу: "${displayTerm}"`;
                 catalogSearchInfo.style.display = 'block';
             } else {
                 catalogSearchInfo.style.display = 'none';
                 catalogSearchInfo.textContent = '';
             }
        }

        const selectedCategory = categoryFilterSelect.value;
        const selectedBrand = brandFilterSelect.value;
        const maxPrice = parseInt(priceRangeInput.value);
        const sortValue = sortSelect.value;

        console.log('[DEBUG] maxPrice used for filtering:', maxPrice);

        let filteredProducts = window.products;
        if (currentSearchTerm) {
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(currentSearchTerm) ||
                product.description.toLowerCase().includes(currentSearchTerm) ||
                product.brand?.toLowerCase().includes(currentSearchTerm) ||
                product.category?.toLowerCase().includes(currentSearchTerm) ||
                (product.characteristics && Object.values(product.characteristics).some(val => 
                    String(val).toLowerCase().includes(currentSearchTerm)
                ))
            );
        }

        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        if (selectedBrand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
        }

        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (sortValue === 'price-asc') {
                return a.price - b.price;
            } else if (sortValue === 'price-desc') {
                return b.price - a.price;
            } else {
                return a.name.localeCompare(b.name);
            }
        });

        const totalMatchingItems = sortedProducts.length;
        const productsToDisplay = sortedProducts;

        console.log('[DEBUG] totalMatchingItems after filtering:', totalMatchingItems);
        const calculatedTotalPages = Math.ceil(totalMatchingItems / itemsPerPage);
        console.log('[DEBUG] calculatedTotalPages:', calculatedTotalPages);
        console.log('[DEBUG] Displaying ALL ' + productsToDisplay.length + ' matching products without pagination.');

        renderProducts(productList, productsToDisplay, false);
        initializeLazyObserver();
    }

    function renderFeaturedProducts() {
        if (!featuredProductGrid) return;
        const featured = window.products.slice(0, 3);
        renderProducts(featuredProductGrid, featured, true);
        initializeLazyObserver();
    }

    function addToCart(id, quantityToAdd = 1) {
        const product = window.products.find(p => p.id === id);
        if (!product) {
            console.error(`[addToCart] Product with id ${id} not found.`);
            showToastNotification('Ошибка: Товар не найден.');
            return;
        }

        const existingCartItemIndex = cart.findIndex(item => item.id === id);
        const currentQuantityInCart = existingCartItemIndex > -1 ? cart[existingCartItemIndex].quantity : 0;

        // Проверяем, достаточно ли товара на складе для ДОБАВЛЕНИЯ quantityToAdd
        // (с учетом того, что может быть уже что-то в корзине, но addToCart с карточки товара всегда добавляет +1 к тому, что уже ЕСТЬ на складе)
        // Эта функция вызывается с карточки товара (всегда quantityToAdd=1) или из модалки (тоже quantityToAdd=1)
        // Логика для изменения количества УЖЕ В КОРЗИНЕ будет в cart.js
        if (typeof product.stock !== 'number' || product.stock < quantityToAdd) {
            showToastNotification(`К сожалению, товара "${product.name}" недостаточно на складе (осталось ${product.stock || 0}).`);
            // Обновляем отображение на всякий случай, если stock изменился другим путем
            if(window.updateProductDisplayInCatalog) window.updateProductDisplayInCatalog(id);
            return;
        }
        
        // Если товар уже в корзине, и мы пытаемся добавить еще, проверяем не превысит ли общее количество остаток
        if (existingCartItemIndex > -1) {
             if (product.stock < quantityToAdd) { // currentQuantityInCart + quantityToAdd > product.stock
                showToastNotification(`Невозможно добавить ${quantityToAdd} шт. товара "${product.name}". На складе: ${product.stock}, в корзине уже: ${currentQuantityInCart}.`);
                if(window.updateProductDisplayInCatalog) window.updateProductDisplayInCatalog(id);
                return;
            }
        }


        // Уменьшаем сток в глобальном window.products
        product.stock -= quantityToAdd;

        if (existingCartItemIndex > -1) {
            cart[existingCartItemIndex].quantity += quantityToAdd;
        } else {
            // Важно: в корзину кладем КОПИЮ товара, но с quantity.
            // Stock в этой копии в корзине не будет отражать реальный остаток на складе,
            // реальный остаток будет в window.products[...].stock
            const productForCart = { ...product }; 
            // Удаляем stock из объекта в корзине, чтобы не было путаницы,
            // так как актуальный stock всегда в window.products
            // delete productForCart.stock; // Или оставляем, но не полагаемся на него в cart.js для проверок
            productForCart.quantity = quantityToAdd;
            cart.push(productForCart);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        showToastNotification(`${product.name} (${quantityToAdd} шт.) добавлен в корзину! Остаток: ${product.stock} шт.`);
        updateCartCountDisplay();

        // Обновляем отображение карточки товара в каталоге
        if(window.updateProductDisplayInCatalog) window.updateProductDisplayInCatalog(id);
    }

    function showToastNotification(message) {
        const existingToast = document.getElementById('toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification show';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => { 
                 if (toast.parentNode) {
                     toast.parentNode.removeChild(toast); 
                 } 
            }, 500);
        }, 3000);
    }

    function handleFilterOrSearchChange() {
        currentPage = 1;
        renderCatalog();
    }

    if (productList && sortSelect && brandFilterSelect && categoryFilterSelect && priceRangeInput && priceRangeValueSpan && paginationControlsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTermFromURL = urlParams.get('search');
        currentSearchTerm = searchTermFromURL ? searchTermFromURL.trim().toLowerCase() : '';
        currentPage = 1;

        if (currentSearchTerm && searchInputHeader) {
            searchInputHeader.value = searchTermFromURL;
        }

        populateBrandFilter();
        populateCategoryFilter();

        sortSelect.addEventListener('change', handleFilterOrSearchChange);
        brandFilterSelect.addEventListener('change', handleFilterOrSearchChange);
        categoryFilterSelect.addEventListener('change', handleFilterOrSearchChange);
        priceRangeInput.addEventListener('input', () => {
            if (priceRangeValueSpan) {
                priceRangeValueSpan.textContent = `до ${priceRangeInput.value}₽`;
            }
        });
        priceRangeInput.addEventListener('change', handleFilterOrSearchChange);

        renderCatalog();
    } else if (featuredProductGrid) {
        renderFeaturedProducts();
    } else {
        if (window.location.pathname.includes('catalog.html')) {
             console.error('Catalog elements (product list, filters, pagination) not found. Catalog functionality may be impaired.');
        }
        if (document.querySelectorAll('img.lazy').length > 0) {
           initializeLazyObserver();
        }
    }

    if (searchFormHeader) {
        searchFormHeader.addEventListener('submit', (event) => {
        });
    }

    function createProductModalHTML(product) {
        let characteristicsHTML = '';
        if (product.characteristics && typeof product.characteristics === 'object' && Object.keys(product.characteristics).length > 0) {
            characteristicsHTML += '<div class="modal-product-characteristics">';
            characteristicsHTML += '<h3>Характеристики:</h3><ul>';
            for (const [key, value] of Object.entries(product.characteristics)) {
                characteristicsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
            }
            characteristicsHTML += '</ul></div>';
        }

        return `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close-btn" aria-label="Закрыть">&times;</button>
                    <div class="modal-image-column">
                        <img src="${product.image}" alt="${product.name}" class="modal-product-image">
                    </div>
                    <div class="modal-details-column">
                        <h2 class="modal-product-name">${product.name}</h2>
                        <p class="modal-product-category"><strong>Категория:</strong> ${product.category || 'Не указана'}</p>
                        <p class="modal-product-brand"><strong>Бренд:</strong> ${product.brand || 'Не указан'}</p>
                        <div class="modal-product-description-full">
                            <h3>Описание:</h3>
                            <p>${product.description || 'Описание отсутствует.'}</p>
                        </div>
                        ${characteristicsHTML}
                        <p class="modal-product-price">Цена: ${product.price}₽</p>
                        <button class="modal-add-to-cart-btn" data-product-id="${product.id}">В корзину</button>
                    </div>
                </div>
            </div>
        `;
    }

    function showProductDetails(productId) {
        const product = window.products.find(p => p.id === productId);
        if (!product) return;

        const modalHTML = createProductModalHTML(product);
        const modalContainer = document.createElement('div');
        modalContainer.id = 'product-detail-modal-container';
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer);
        document.body.style.overflow = 'hidden';

        const overlay = modalContainer.querySelector('.modal-overlay');
        const closeButton = modalContainer.querySelector('.modal-close-btn');
        const addToCartButtonModal = modalContainer.querySelector('.modal-add-to-cart-btn');

        const closeModal = () => {
            const containerToRemove = document.getElementById('product-detail-modal-container');
            if (containerToRemove) {
                document.body.removeChild(containerToRemove);
            }
            document.body.style.overflow = '';
        };

        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
        if (overlay) {
            overlay.addEventListener('click', (event) => {
                if (event.target === overlay) {
                    closeModal();
                }
            });
        }
        if (addToCartButtonModal) {
            addToCartButtonModal.addEventListener('click', (event) => {
                event.stopPropagation();
                addToCart(product.id);
            });
        }
    }

    // Scroll-to-top button logic
    console.log('[DEBUG] scrollToTopBtn element (checked before attaching listeners):', scrollToTopBtn);

    if (scrollToTopBtn) {
        console.log('[DEBUG] scrollToTopBtn found, attaching scroll and click listeners.');
        window.onscroll = function() {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                if (scrollToTopBtn.style.display !== "block") {
                    scrollToTopBtn.style.display = "block";
                    console.log('[DEBUG] Setting scrollToTopBtn display to block');
                }
            } else {
                if (scrollToTopBtn.style.display !== "none") {
                    scrollToTopBtn.style.display = "none";
                    console.log('[DEBUG] Setting scrollToTopBtn display to none');
                }
            }
        };

        scrollToTopBtn.addEventListener("click", function() {
            console.log('[DEBUG] scrollToTopBtn clicked.');
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        // Initial check in case the page is already scrolled down (e.g. after a refresh)
        const initialScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (initialScrollTop > 100) {
            scrollToTopBtn.style.display = "block";
             console.log('[DEBUG] Initial check: Setting scrollToTopBtn display to block');
        } else {
            scrollToTopBtn.style.display = "none";
            console.log('[DEBUG] Initial check: Setting scrollToTopBtn display to none');
        }

    } else {
        console.error('[DEBUG] scrollToTopBtn element NOT FOUND on this page when trying to attach listeners.');
    }

    // Initial cart count update on page load
    updateCartCountDisplay();
});
