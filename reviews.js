document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    function renderStars(rating) {
        const maxStars = 5;
        let starsHTML = '';
        for (let i = 1; i <= maxStars; i++) {
            starsHTML += `<span class="star ${i <= rating ? 'filled' : 'empty'}">${i <= rating ? '★' : '☆'}</span>`;
        }
        return `<div class="review-rating">${starsHTML}</div>`;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function renderReviews() {
        reviewsList.innerHTML = '';
        // Sort reviews by date, newest first
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (reviews.length === 0) {
            reviewsList.innerHTML = '<p class="no-reviews-message">Отзывов пока нет. Будьте первым!</p>';
            return;
        }

        reviews.forEach(({ name, text, rating, date }) => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            
            reviewElement.innerHTML = `
                <div class="review-header">
                    <strong class="reviewer-name">${name}</strong>
                    <span class="review-date">${formatDate(date)}</span>
                </div>
                ${renderStars(parseInt(rating))}
                <p class="review-text">${text}</p>
            `;
            reviewsList.appendChild(reviewElement);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reviewer-name').value.trim();
        const text = document.getElementById('review-text').value.trim();
        const rating = document.getElementById('rating').value;
        const currentDate = new Date().toISOString();

        if (!name || !text || !rating) {
            // Basic validation, can be enhanced
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        reviews.push({ name, text, rating, date: currentDate });
        localStorage.setItem('reviews', JSON.stringify(reviews));
        form.reset();
        renderReviews();
    });

    renderReviews();
});
