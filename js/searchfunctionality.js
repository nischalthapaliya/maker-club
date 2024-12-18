function performSearch() {
    const searchQuery = document.getElementById('search-input').value.trim();
    const eventType = document.getElementById('type-filter').value;
    const location = document.getElementById('location-filter').value;
    const date = document.getElementById('date-filter').value;

    fetch('/api/search', {
        method: 'POST', // or 'GET'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery, eventType, location, date })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Search Results:", data);
        // Process and display the search results here.
    })
    .catch(error => console.error('Error:', error));
}
