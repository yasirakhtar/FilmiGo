var navMenu = document.getElementById("navMenu");

function openMenu() {
    navMenu.style.right = "0";
}

function closeMenu() {
    navMenu.style.right = "-500px";
}

var searchPopupBoxMain = document.getElementById("searchPopupBoxMain");

function openSearchPopUpBox() {
    searchPopupBoxMain.style.display = "flex";
}

function closeSearchPopUpBox() {
    searchPopupBoxMain.style.display = "none";
}


// Search Js 

document.addEventListener("DOMContentLoaded", function() {
    let urlParams = new URLSearchParams(window.location.search);
    let searchText = urlParams.get('s');
    if (searchText) {
        document.getElementById("searchInput").value = searchText;
        performSearch(searchText);
    }
});

// function search() {
//     let searchText = document.getElementById("searchInput").value.toLowerCase();
//     updateUrl(searchText);
//     performSearch(searchText);
// }

function updateUrl(searchText) {
    let queryParam = encodeURIComponent(searchText);
    if (history.pushState) {
        let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?s=' + queryParam;
        history.pushState({path: newUrl}, '', newUrl);
    }
}

function performSearch(searchText) {
    let movies = document.querySelectorAll(".movie");
    movies.forEach(movie => {
        let title = movie.querySelector(".movie-title-box p").innerText.toLowerCase();
        let allMovies = document.getElementById("allMovies");
        if (title.includes(searchText)) {
            movie.style.display = "block";
            allMovies.style.justifyContent = "left";
            allMovies.style.gap = "15px";
        } else {
            movie.style.display = "none";
        }
    });
}
