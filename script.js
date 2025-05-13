document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "Процессор AMD Ryzen 5 5600G",
            price: 15000,
            description: "Отличный процессор со встроенной графикой.",
            imageUrl: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-683-V01.jpg",
            brand: "AMD",
            category: "Процессор",
            characteristics: {
                "Сокет": "AM4",
                "Количество ядер": "6",
                "Количество потоков": "12",
                "Базовая частота": "3.9 ГГц",
                "Турбо частота": "4.4 ГГц",
                "Встроенная графика": "Radeon Vega 7",
                "Техпроцесс": "7 нм"
            }
        },
        {
            id: 2,
            name: "Видеокарта NVIDIA RTX 3060",
            price: 35000,
            description: "Производительная видеокарта для современных игр.",
            imageUrl: "rtx3060.png",
            brand: "NVIDIA",
            category: "Видеокарта",
            characteristics: {
                "Объем памяти": "12 ГБ",
                "Тип памяти": "GDDR6",
                "Шина памяти": "192 бит",
                "Интерфейс": "PCI Express 4.0",
                "Рекомендуемый БП": "550 Вт",
                "Разъемы": "HDMI, DisplayPort"
            }
        },
        {
            id: 3,
            name: "Оперативная память Kingston 16GB DDR4",
            price: 7000,
            description: "Высокопроизводительная оперативная память.",
            imageUrl: "Оперативная память Kingston 16GB DDR4.jpg",
            brand: "Kingston",
            category: "Оперативная память",
            characteristics: {
                "Объем": "16 ГБ (2x8 ГБ)",
                "Тип": "DDR4",
                "Частота": "3200 МГц",
                "Тайминги": "CL16",
                "Напряжение": "1.35 В",
                "Радиаторы": "Есть"
            }
        },
        {
            id: 5,
            name: "Материнская плата ASUS PRIME Z690-P",
            price: 18000,
            description: "Современная материнская плата с поддержкой DDR5.",
            imageUrl: "Материнская плата ASUS PRIME Z690-P.jpg",
            brand: "ASUS",
            category: "Материнская плата",
            characteristics: {
                "Сокет": "LGA1700",
                "Чипсет": "Intel Z690",
                "Тип памяти": "DDR5",
                "Форм-фактор": "ATX",
                "Слоты PCI-E": "1 x PCIe 5.0 x16",
                "Разъемы M.2": "3"
            }
        },
        {
            id: 6,
            name: "Клавиатура Logitech G Pro",
            price: 9000,
            description: "Механическая игровая клавиатура.",
            imageUrl: "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery/us-pro-gaming-keyboard-gallery-topdown.png",
            brand: "Logitech",
            category: "Клавиатура",
            characteristics: {
                "Тип": "Механическая",
                "Переключатели": "GX Blue Clicky (или другие)",
                "Подсветка": "RGB LIGHTSYNC",
                "Подключение": "USB",
                "Формат": "TKL (без цифрового блока)"
            }
        },
        {
            id: 7,
            name: "Мышь Razer DeathAdder V2",
            price: 5000,
            description: "Эргономичная игровая мышь с высокой точностью.",
            imageUrl: "Мышь Razer DeathAdder V2.jpg",
            brand: "Razer",
            category: "Мышь",
            characteristics: {
                "Сенсор": "Focus+ Optical",
                "Разрешение": "20000 DPI",
                "Кнопки": "8 программируемых",
                "Переключатели": "Razer Optical",
                "Подсветка": "Razer Chroma RGB",
                "Вес": "82 г"
            }
        },
        {
            id: 8,
            name: "Корпус NZXT H510",
            price: 8000,
            description: "Стильный и компактный корпус Mid-Tower с хорошей вентиляцией.",
            imageUrl: "Корпус NZXT H510.jpg",
            brand: "NZXT",
            category: "Корпус",
            characteristics: {
                "Форм-фактор": "ATX Mid Tower",
                "Материал": "Сталь, Закаленное стекло",
                "Отсеки 3.5": "2+1",
                "Отсеки 2.5": "2+1",
                "Разъемы USB": "1x USB 3.1 Gen 2 Type-C, 1x USB 3.1 Gen 1 Type-A",
                "Макс. высота кулера CPU": "165 мм",
                "Макс. длина GPU": "381 мм"
            }
        },
        {
            id: 9,
            name: "Блок питания Corsair RM750x",
            price: 10000,
            description: "Надежный блок питания 750W Gold сертификации.",
            imageUrl: "https://www.kitguru.net/wp-content/uploads/2015/09/AS7V2680.jpg",
            brand: "Corsair",
            category: "Блок питания",
            characteristics: {
                "Мощность": "750 Вт",
                "Сертификат": "80 PLUS Gold",
                "Модульный": "Полностью",
                "Вентилятор": "135 мм (Zero RPM режим)",
                "Разъемы": "ATX, EPS, PCIe, SATA, Peripheral"
            }
        },
        {
            id: 10,
            name: "Монитор Dell 27 S2721DGF",
            price: 35000,
            description: "27-дюймовый QHD игровой монитор с высокой частотой обновления.",
            imageUrl: "Монитор Dell 27 S2721DGF.jpg",
            brand: "Dell",
            category: "Монитор",
            characteristics: {
                "Диагональ": "27 дюймов",
                "Разрешение": "2560x1440 (QHD)",
                "Тип матрицы": "IPS",
                "Частота обновления": "165 Гц",
                "Время отклика": "1 мс (GtG)",
                "Поддержка G-Sync/FreeSync": "FreeSync Premium Pro, G-Sync Compatible"
            }
        },
        {
            id: 11,
            name: "Гарнитура HyperX Cloud II",
            price: 7500,
            description: "Популярная игровая гарнитура с отличным звуком.",
            imageUrl: "Гарнитура HyperX Cloud II.jpg",
            brand: "HyperX",
            category: "Гарнитура",
            characteristics: {
                "Тип": "Накладные, закрытые",
                "Подключение": "USB / 3.5 мм",
                "Виртуальный звук": "7.1 Surround Sound (через USB-адаптер)",
                "Микрофон": "Съемный, с шумоподавлением"
            }
        },
        {
            id: 12,
            name: "Веб-камера Logitech C920",
            price: 6000,
            description: "Full HD веб-камера для стримов и видеоконференций.",
            imageUrl: "https://resource.logitech.com/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-1.png",
            brand: "Logitech",
            category: "Веб-камера",
            characteristics: {
                "Разрешение видео": "1080p / 30 fps, 720p / 30 fps",
                "Разрешение фото": "15 Мп (с интерполяцией)",
                "Фокусировка": "Автофокус",
                "Угол обзора": "78°",
                "Микрофон": "Стерео",
                "Крепление": "Универсальное"
            }
        },
        {
            id: 13,
            name: "Жесткий диск Seagate 2TB",
            price: 5500,
            description: "Вместительный HDD для хранения больших объемов данных.",
            imageUrl: "https://m.media-amazon.com/images/I/41X3wiuUlSL._AC_.jpg",
            brand: "Seagate",
            category: "HDD",
            characteristics: {
                "Объем": "2 ТБ",
                "Форм-фактор": "3.5",
                "Интерфейс": "SATA III (6 Гбит/с)",
                "Скорость вращения": "7200 об/мин",
                "Кэш-память": "256 МБ"
            }
        },
        {
            id: 14,
            name: "Процессор AMD Ryzen 7 5800X",
            price: 28000,
            description: "Мощный 8-ядерный процессор для игр и работы.",
            imageUrl: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-665-V01.jpg",
            brand: "AMD",
            category: "Процессор",
            characteristics: {
                "Сокет": "AM4",
                "Количество ядер": "8",
                "Количество потоков": "16",
                "Базовая частота": "3.8 ГГц",
                "Турбо частота": "4.7 ГГц",
                "Техпроцесс": "7 нм",
                "Тепловыделение (TDP)": "105 Вт"
            }
        },
        {
            id: 15,
            name: "Видеокарта NVIDIA RTX 3070",
            price: 50000,
            description: "Высокопроизводительная видеокарта для 2K и 4K гейминга.",
            imageUrl: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-600-p@2x.png",
            brand: "NVIDIA",
            category: "Видеокарта",
            characteristics: {
                "Объем памяти": "8 ГБ",
                "Тип памяти": "GDDR6",
                "Шина памяти": "256 бит",
                "Интерфейс": "PCI Express 4.0",
                "Рекомендуемый БП": "650 Вт",
                "Разъемы": "HDMI, DisplayPort"
            }
        },
        {
            id: 16,
            name: "Кулер Cooler Master Hyper 212 EVO",
            price: 3000,
            description: "Эффективный и тихий кулер для процессора.",
            imageUrl: "Кулер Cooler Master Hyper 212 EVO.jpg",
            brand: "Cooler Master",
            category: "Кулер",
            characteristics: {
                "Совместимость (сокеты)": "Intel LGA1700/1200/115x, AMD AM4/AM5",
                "Материал радиатора": "Алюминий",
                "Тепловые трубки": "4",
                "Размер вентилятора": "120 мм",
                "Скорость вращения": "600-1600 об/мин"
            }
        },
        {
            id: 18,
            name: "Материнская плата MSI MPG B550 GAMING PLUS",
            price: 14000,
            description: "Надежная материнская плата для процессоров AMD Ryzen.",
            imageUrl: "Материнская плата MSI MPG B550 GAMING PLUS.jpg",
            brand: "MSI",
            category: "Материнская плата",
            characteristics: {
                "Сокет": "AM4",
                "Чипсет": "AMD B550",
                "Тип памяти": "DDR4",
                "Форм-фактор": "ATX",
                "Слоты PCI-E": "1 x PCIe 4.0 x16, 1 x PCIe 3.0 x16",
                "Разъемы M.2": "2"
            }
        },
        {
            id: 19,
            name: "Монитор AOC 24G2",
            price: 18000,
            description: "24-дюймовый игровой IPS монитор, 144Hz.",
            imageUrl: "Монитор AOC 24G2.jpg",
            brand: "AOC",
            category: "Монитор",
            characteristics: {
                "Диагональ": "23.8 дюйма",
                "Разрешение": "1920x1080 (Full HD)",
                "Тип матрицы": "IPS",
                "Частота обновления": "144 Гц",
                "Время отклика": "1 мс (MPRT)",
                "Поддержка FreeSync": "FreeSync Premium"
            }
        },
        {
            id: 20,
            name: "Наушники Sony WH-1000XM4",
            price: 25000,
            description: "Премиальные наушники с лучшим шумоподавлением.",
            imageUrl: "Наушники Sony WH-1000XM4.jpg",
            brand: "Sony",
            category: "Наушники",
            characteristics: {
                "Тип": "Полноразмерные, закрытые",
                "Подключение": "Bluetooth 5.0 / 3.5 мм",
                "Шумоподавление": "Активное (ANC)",
                "Время работы": "До 30 ч (с ANC)",
                "Кодеки": "SBC, AAC, LDAC"
            }
        }
    ];

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

    function renderProducts(container, productArray, isFeatured = false) {
        if (!container) return;
        container.innerHTML = '';
        
        if (productArray.length === 0 && !isFeatured) {
            if (container.id === 'product-list') { 
                const message = currentSearchTerm ? 'Товары не найдены.' : 'Нет товаров, соответствующих фильтрам.';
                container.innerHTML = `<p class="catalog-empty-message">${message}</p>`;
            }
            return;
        }
        
        productArray.forEach(product => {
            const productCardWrapper = document.createElement('div');
            productCardWrapper.className = 'product-card-link-wrapper';
            productCardWrapper.dataset.productId = product.id;

            const productCard = document.createElement('article');
            productCard.className = 'product-card';
            
            productCard.addEventListener('click', (event) => {
                if (event.target.tagName.toLowerCase() !== 'button') {
                    showProductDetails(product.id);
                }
            });

            productCard.innerHTML = `
                <img data-src="${product.imageUrl}" alt="${product.name}" class="product-image lazy">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">Цена: ${product.price}₽</p>
                <button data-product-id="${product.id}">В корзину</button>
            `;

            productCardWrapper.appendChild(productCard);

            container.appendChild(productCardWrapper);

            const button = productCard.querySelector('button');
            if(button) {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const productId = parseInt(event.target.getAttribute('data-product-id'));
                    addToCart(productId);
                });
            }

            requestAnimationFrame(() => {
                productCardWrapper.classList.add('product-card-visible');
            });

            const newImage = productCardWrapper.querySelector('img.lazy');
            if (lazyImageObserver && newImage) {
                lazyImageObserver.observe(newImage);
            }
        });
    }

    function populateBrandFilter() {
        if (!brandFilterSelect) return;
        const availableProducts = currentSearchTerm
            ? products.filter(product => 
                product.name.toLowerCase().includes(currentSearchTerm) || 
                product.description.toLowerCase().includes(currentSearchTerm) ||
                product.brand?.toLowerCase().includes(currentSearchTerm) ||
                product.category?.toLowerCase().includes(currentSearchTerm) ||
                (product.characteristics && Object.values(product.characteristics).some(val => 
                    String(val).toLowerCase().includes(currentSearchTerm)
                ))
            )
            : products;

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
            ? products.filter(product => 
                product.name.toLowerCase().includes(currentSearchTerm) || 
                product.description.toLowerCase().includes(currentSearchTerm) ||
                product.brand?.toLowerCase().includes(currentSearchTerm) ||
                product.category?.toLowerCase().includes(currentSearchTerm) ||
                (product.characteristics && Object.values(product.characteristics).some(val => 
                    String(val).toLowerCase().includes(currentSearchTerm)
                ))
            )
            : products;

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

        let filteredProducts = products;
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
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToDisplay = sortedProducts.slice(startIndex, endIndex);

        const currentCards = productList.querySelectorAll('.product-card-link-wrapper');
        const finalVisibleProductIds = new Set(productsToDisplay.map(p => p.id));
        const cardsToRemove = [];
        
        currentCards.forEach(cardWrapper => {
            const cardProductId = parseInt(cardWrapper.dataset.productId);
            if (!finalVisibleProductIds.has(cardProductId)) {
                cardsToRemove.push(cardWrapper);
            }
        });

        renderProducts(productList, productsToDisplay, false);

        renderPaginationControls(totalMatchingItems);
    }

    function renderFeaturedProducts() {
        if (!featuredProductGrid) return;
        const featured = products.slice(0, 3);
        renderProducts(featuredProductGrid, featured, true);
    }

    function addToCart(id) {
        const product = products.find(p => p.id === id);
        if (product) {
            const existingCartItemIndex = cart.findIndex(item => item.id === id);
            if (existingCartItemIndex > -1) {
                cart[existingCartItemIndex].quantity = (cart[existingCartItemIndex].quantity || 1) + 1;
            } else {
                cart.push({...product, quantity: 1});
            }
        localStorage.setItem('cart', JSON.stringify(cart));
            showToastNotification(`${product.name} добавлен в корзину!`);
            if (window.updateCartCountDisplay) {
                window.updateCartCountDisplay();
            }
        }
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
                        <img src="${product.imageUrl}" alt="${product.name}" class="modal-product-image">
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
        const product = products.find(p => p.id === productId);
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

    const lazyLoadCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
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
                    if (!lazyImage.src) {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy');
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

    initializeLazyObserver();
});
