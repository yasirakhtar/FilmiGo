document.addEventListener('DOMContentLoaded', () => {
    // URL of the JSON data
    const jsonFileUrl = 'https://www.anime4nx.xyz/json/all_post.json';
    // Default image URL
    const defaultImg = 'https://via.placeholder.com/150';
    // Proxy URL to bypass CORS restrictions
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    // Function to fetch and display the data
    function fetchAndDisplayData() {
        fetch(proxyUrl + jsonFileUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const contentDiv = document.getElementById('allMovies');
                contentDiv.innerHTML = data.map(curElem => {
                    // Using default image if specific screenshots are missing
                    return `
                        <div class="movie">
                    <a href="${curElem.link}" title="${curElem.p_text}" class="movie-link" id="movieLink">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                                <img src="${curElem.img}" alt="${curElem.id}" loading="lazy">
                            </div>
                            <div class="movie-title-box">
                                <p>${curElem.p_text}</p>
                            </div>
                        </div>
                    </a>
                </div>
                    `;
                }).join('');
            })
            .catch(error => {
                console.error('Fetch error:', error);
                // Optionally display an error message to the user
                document.getElementById('recentMovies').innerHTML = '<p>Sorry, there was an error loading the recentMovies.</p>';
            });
    }

    // Call the function to fetch and display data
    fetchAndDisplayData();
});
