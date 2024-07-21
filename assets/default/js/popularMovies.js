const popularDiv = document.getElementById('popularMovies');

let popular = new XMLHttpRequest();
popular.onreadystatechange = () => {
    if (popular.readyState == 4 && popular.status == 200) {
        let data = JSON.parse(popular.responseText);

        popularDiv.innerHTML = `${data.slice(0, 5).map((curElem) => { // 0, 5

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
        popularDiv.innerHTML = `
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
popular.open("GET", "/json/popularMovies.json", true);
popular.send();