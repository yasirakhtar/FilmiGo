const movieRecent = document.getElementById('movieRecent');

let movieRecents = new XMLHttpRequest();
movieRecents.onreadystatechange = () => {
    if (movieRecents.readyState == 4 && movieRecents.status == 200) {
        let data = JSON.parse(movieRecents.responseText);

        movieRecent.innerHTML = `${data.slice(0, 5).map((curElem) => {

            return (
                `<div class="movie">
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
                </div>`
            )
        }).join("")}`
    } else {
        movieRecent.innerHTML = `
        <div class="movie loading">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                            </div>
                            <div class="movie-title-box">
                            </div>
                        </div>
                </div>
                <div class="movie loading">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                            </div>
                            <div class="movie-title-box">
                            </div>
                        </div>
                </div>
                <div class="movie loading">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                            </div>
                            <div class="movie-title-box">
                            </div>
                        </div>
                </div>
                <div class="movie loading">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                            </div>
                            <div class="movie-title-box">
                            </div>
                        </div>
                </div>
                <div class="movie loading">
                        <div class="movie-link-box">
                            <div class="movie-img-box">
                            </div>
                            <div class="movie-title-box">
                            </div>
                        </div>
                </div>`
    }
}
movieRecents.open("GET", "/json/allMovies.json", true);
movieRecents.send();