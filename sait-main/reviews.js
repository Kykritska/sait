document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Ensure each review has an ID and a replies array
    reviews = reviews.map((review, index) => ({
        ...review,
        id: review.id || Date.now() + index, // Assign a new ID if missing
        replies: review.replies || [] // Ensure replies array exists
    }));
    localStorage.setItem('reviews', JSON.stringify(reviews)); // Save back if modified

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
        return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }

    function renderReplies(replies, reviewId) {
        if (!replies || replies.length === 0) {
            return '';
        }
        let repliesHTML = '<div class="review-replies">';
        replies.forEach(reply => {
            repliesHTML += `
                <div class="review-reply" data-review-id="${reviewId}">
                    <div class="review-reply-header">
                        <strong class="reply-author">${reply.author}</strong>
                        <span class="reply-date">${formatDate(reply.date)}</span>
                    </div>
                    <p class="reply-text">${reply.text.replace(/\\n/g, '<br>')}</p>
                </div>
            `;
        });
        repliesHTML += '</div>';
        return repliesHTML;
    }

    function renderReviews() {
        reviewsList.innerHTML = '';
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (reviews.length === 0) {
            reviewsList.innerHTML = '<p class="no-reviews-message">Отзывов пока нет. Будьте первым!</p>';
            return;
        }

        reviews.forEach(review => { // Removed destructuring to access review.id and review.replies
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.dataset.reviewId = review.id;
            
            reviewElement.innerHTML = `
                <div class="review-header">
                    <strong class="reviewer-name">${review.name}</strong>
                    <span class="review-date">${formatDate(review.date)}</span>
                </div>
                ${renderStars(parseInt(review.rating))}
                <p class="review-text">${review.text.replace(/\\n/g, '<br>')}</p>
                ${renderReplies(review.replies, review.id)}
                <button class="reply-btn" data-review-id="${review.id}">Ответить</button>
                <div class="reply-form-container" id="reply-form-for-${review.id}" style="display:none;">
                    <!-- Reply form will be injected here -->
                </div>
            `;
            reviewsList.appendChild(reviewElement);
        });

        addReplyButtonListeners();
    }

    function addReplyButtonListeners() {
        document.querySelectorAll('.reply-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const reviewId = e.target.dataset.reviewId;
                toggleReplyForm(reviewId);
            });
        });
    }

    function toggleReplyForm(reviewId) {
        // Hide all other forms
        document.querySelectorAll('.reply-form-container').forEach(container => {
            if (container.id !== `reply-form-for-${reviewId}`) {
                container.innerHTML = ''; // Clear content
                container.style.display = 'none';
            }
        });

        const formContainer = document.getElementById(`reply-form-for-${reviewId}`);
        if (formContainer.style.display === 'none' || formContainer.innerHTML === '') {
            formContainer.innerHTML = `
                <textarea class="reply-text-area" placeholder="Введите ваш ответ..."></textarea>
                <button class="submit-reply-btn" data-review-id="${reviewId}">Отправить ответ</button>
                <button class="cancel-reply-btn" data-review-id="${reviewId}">Отмена</button>
            `;
            formContainer.style.display = 'block';
            addSubmitReplyListeners(reviewId);
            addCancelReplyListeners(reviewId);
        } else {
            formContainer.innerHTML = ''; // Clear content if already visible (acts as a toggle off)
            formContainer.style.display = 'none';
        }
    }
    
    function addCancelReplyListeners(reviewId) {
        const formContainer = document.getElementById(`reply-form-for-${reviewId}`);
        const cancelButton = formContainer.querySelector('.cancel-reply-btn');
        if (cancelButton) {
            cancelButton.addEventListener('click', () => {
                formContainer.innerHTML = '';
                formContainer.style.display = 'none';
            });
        }
    }

    function addSubmitReplyListeners(reviewId) {
        const formContainer = document.getElementById(`reply-form-for-${reviewId}`);
        const submitButton = formContainer.querySelector('.submit-reply-btn');
        if (submitButton) {
            submitButton.addEventListener('click', () => {
                const textArea = formContainer.querySelector('.reply-text-area');
                const replyText = textArea.value.trim();
                if (replyText) {
                    addReply(reviewId, replyText);
                    formContainer.innerHTML = ''; // Clear form
                    formContainer.style.display = 'none'; // Hide form
                } else {
                    alert('Пожалуйста, введите текст ответа.');
                }
            });
        }
    }
    
    function addReply(reviewId, text) {
        const reviewIndex = reviews.findIndex(r => r.id.toString() === reviewId.toString());
        if (reviewIndex > -1) {
            const newReply = {
                author: "Администратор", // Default author for replies
                text: text,
                date: new Date().toISOString()
            };
            if (!reviews[reviewIndex].replies) {
                reviews[reviewIndex].replies = [];
            }
            reviews[reviewIndex].replies.push(newReply);
            localStorage.setItem('reviews', JSON.stringify(reviews));
            renderReviews(); // Re-render to show the new reply
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reviewer-name').value.trim();
        const text = document.getElementById('review-text').value.trim();
        const rating = document.getElementById('rating').value;
        const currentDate = new Date().toISOString();

        if (!name || !text || !rating) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const newReview = { 
            id: Date.now(), 
            name, 
            text, 
            rating, 
            date: currentDate, 
            replies: [] 
        };
        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        form.reset();
        renderReviews();
    });

    renderReviews();
});
