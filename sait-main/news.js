document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.querySelector('.news-section');
    if (!newsSection) return;

    const newsItemsContainer = newsSection; // Assuming news items are direct children or need a specific container
    const newsItems = Array.from(newsSection.querySelectorAll('.news-item'));

    if (newsItems.length === 0) return;

    // Function to parse date from news item
    function getNewsDate(newsItem) {
        const dateElement = newsItem.querySelector('.news-date');
        if (!dateElement) return new Date(0); // января 1970, for items without date

        const dateText = dateElement.textContent.trim();
        // Assuming format "ДД месяца ГГГГ"
        const parts = dateText.split(' ');
        if (parts.length < 3) return new Date(0);

        const day = parseInt(parts[0]);
        const year = parseInt(parts[2]);
        const monthName = parts[1].toLowerCase();

        const monthMap = {
            'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3,
            'мая': 4, 'июня': 5, 'июля': 6, 'августа': 7,
            'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
        };

        const month = monthMap[monthName];

        if (isNaN(day) || isNaN(year) || month === undefined) {
            // Fallback for non-standard date formats, try parsing directly
            const parsedDate = new Date(dateText);
            return isNaN(parsedDate) ? new Date(0) : parsedDate;
        }
        return new Date(year, month, day);
    }

    // Sort news items by date, newest first
    newsItems.sort((a, b) => {
        const dateA = getNewsDate(a);
        const dateB = getNewsDate(b);
        return dateB - dateA; // Sort descending
    });

    // Re-append sorted news items
    // Clear existing items before appending sorted ones
    // Find the H1 to keep it at the top if news items are direct children of newsSection
    const heading = newsSection.querySelector('h1');
    newsItemsContainer.innerHTML = ''; // Clear container
    if (heading) {
        newsItemsContainer.appendChild(heading); // Add back the heading
    }
    newsItems.forEach(item => newsItemsContainer.appendChild(item));

}); 