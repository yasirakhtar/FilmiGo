document.addEventListener('DOMContentLoaded', () => {
    // URL of the JSON data
    const jsonFileUrl = 'https://www.anime4nx.xyz/json/all_post.json';
    // Proxy URL to bypass CORS restrictions
    const proxyUrl = 'https://api.allorigins.win/get?url=';

    // Function to fetch and display the data
    function fetchAndDisplayData() {
        fetch(proxyUrl + encodeURIComponent(jsonFileUrl))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // API allorigins wraps the response, so we need to parse the contents
                data = JSON.parse(data.contents);

                // Slice the first 5 items from the data
                const firstFiveMovies = data.slice(0, -1); // <-- Change here
                
                const contentDiv = document.getElementById('allMovies');
                if (!contentDiv) {
                    console.error('Element with ID "allMovies" not found.');
                    return;
                }
                contentDiv.innerHTML = firstFiveMovies.map(curElem => { // <-- Change here
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
                const contentDiv = document.getElementById('allMovies');
                if (contentDiv) {
                    contentDiv.innerHTML = `
                    <div class="movie loading">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                            </div>
                            <div class="movie-title-box">
                            </div>
                        </div>
                </div>`;
                }
            });
    }

    // Call the function to fetch and display data
    fetchAndDisplayData();
});
