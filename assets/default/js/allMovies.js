const dataDiv = document.getElementById('allMovies');

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let data = JSON.parse(xhttp.responseText);

        dataDiv.innerHTML = `${data.map((curElem) => {

            return (
                `<div class="movie">
                            <a href="${curElem.link}" title="${curElem.p_text}" class="movie-link">
                                <div class="movie-link-box">
                                    <div class="movie-img-box">
                                        <img src="${curElem.img}" alt="${curElem.searchtag}" loading="lazy">
                                    </div>
                                    <div class="movie-title-box">
                                        <p>${curElem.p_text}</p>
                                    </div>
                                </div>
                            </a>
                        </div>`
            )
        }).join("")}`
        searchMovie();
    } else {
        dataDiv.innerHTML = `
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
xhttp.open("GET", "/json/allMovies.json", true);
xhttp.send();