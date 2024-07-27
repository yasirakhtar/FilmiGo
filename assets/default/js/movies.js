const dataDiv = document.getElementById('movieSection');


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let data = JSON.parse(xhttp.responseText);
        let hasdata = window.location.search.slice(2)
        let data_filter = data.filter(element => element.hastag == hasdata)
        // let urlParams = new URLSearchParams(window.location.search);
        // let hasdata = urlParams.get('movie');
        // let data_filter = data.filter(element => element.hastag == hasdata);
        let defaultSsImg = '/assets/default/img/screenshot.jpg';

        dataDiv.innerHTML = `${data_filter.map((curElem) => {
            document.title = `${curElem.p_text}`;
            return (
                `<div class="movie-left">
                <div class="movie-left-content">
                    <h2 id="movieTitle">${curElem.p_text}</h2>
                    <p id="movieDescription">✅ Download ${curElem.name}  Dual Audio [${curElem.audio}] Movie available in 1080p, 720p & 480p Qualities For Your Mobile/tablet/Computer. This movie is based on ${curElem.searchtag}.</p>

                    <div class="movie-info-box">
                        <h3>Movie Info:</h3>
                        <p><b>Series Name -</b> <span id="seriesName">${curElem.name}</span></p>
                        <p><b>Released Year -</b> <span id="releaseYear">${curElem.date}</span></p>
                        <p><b>Subtitle -</b> <span id="subtitle">YES / English</span></p>
                        <p><b>Language -</b> <span id="language">${curElem.audio}</span></p>
                        <p><b>Quality -</b> <span id="quality">480p || 720p || 1080p</span></p>
                        <p><b>Movie Size -</b> <span id="movieSize">690MB | 1.4GB | 5GB</span></p>
                        <p><b>Format -</b> <span id="format">MKV</span></p>
                        <p><b>IMDb Rating -</b> <span id="imdbRating">${curElem.rating}</span></p>
                    </div>

                    <div class="screenshot-box-main">
                        <h3>Screenshots: (Must See Before Downloading)…</h3>

                        <div class="screenshot-box">
                            <div class="ss-boxes"><img src="${curElem.screenimg || defaultSsImg}" alt="${curElem.name} screenshot - 1" id="ss1"></div>
                            <div class="ss-boxes"><img src="${curElem.screenimg2 || defaultSsImg}" alt="${curElem.name} screenshot - 2" id="ss2"></div>
                            <div class="ss-boxes"><img src="${curElem.screenimg3 || defaultSsImg}" alt="${curElem.name} screenshot - 3" id="ss3"></div>
                            <div class="ss-boxes"><img src="${curElem.screenimg4 || defaultSsImg}" alt="${curElem.name} screenshot - 4" id="ss4"></div>
                        </div>

                    </div>

                    <div class="download-links-box-main">
                        <h3>|| Download Links ||</h3>

                        <div class="download-link-box">
                            <div class="dl-box">
                                <div class="dl-text-box">
                                    <p>Download In 480p - </p>
                                </div>
                                <div class="dl-btn-box">
                                    <a href="${curElem.down480p}" id="link480"><i class="fa fa-download"></i>Download</a>
                                </div>
                            </div>
                            <div class="dl-box">
                                <div class="dl-text-box">
                                    <p>Download In 720p - </p>
                                </div>
                                <div class="dl-btn-box">
                                    <a href="${curElem.down720p}" id="link720"><i class="fa fa-download"></i>Download</a>
                                </div>
                            </div>
                            <div class="dl-box">
                                <div class="dl-text-box">
                                    <p>Download In 1080p - </p>
                                </div>
                                <div class="dl-btn-box">
                                    <a href="${curElem.down1080p}" id="link1080"><i class="fa fa-download"></i>Download</a>
                                </div>
                            </div>
                            <div class="dl-box">
                                <div class="dl-text-box how-to">
                                    <p>How To Download - </p>
                                </div>
                                <div class="dl-btn-box how-to-btn-box">
                                    <a href="/blog/how-to-download" class="how-to-link" id="howToLink">Click Here</a>
                                </div>
                            </div>
                            <div class="dl-box">
                                <div class="dl-text-box how-to">
                                    <p>Join Our Telegram Channel - </p>
                                </div>
                                <div class="dl-btn-box how-to-btn-box">
                                    <a href="https://t.me/FilmiGoSite" class="telegram-link" id="telegramLink">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="movie-right">
                <div class="movie-right-content">
                    <div class="movie-poster">
                        <img src="${curElem.img}"  onerror="src='/assets/default/img/poster.jpg'" alt="${curElem.name}" id="moviePoster">
                    </div>
                </div>
            </div>`

            )
        }).join("")}`

    } else {
        dataDiv.innerHTML = `
          ...
          `
    }
}
xhttp.open("GET", "/json/allMovies.json", true);
xhttp.send();

function runrechake() {
    let hasdata = window.location.search.slice(2)
    if (hasdata === "") {
        window.location.href = "/"
    } else {
        console.log("Anime Download")
    }
}
// runrechake()