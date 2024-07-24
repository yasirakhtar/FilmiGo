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
    document.getElementById("searchInput").focus();
}

function closeSearchPopUpBox() {
    searchPopupBoxMain.style.display = "none";
}

// search Js

let searchUrl = window.location.search.slice(3)
        let searchText = searchUrl.split("+").join(" ")
    
        if (searchText == "") {
            document.getElementById("title").innerHTML = `All Movies`
        } else {
            document.getElementById("title").innerHTML = `Search Results for ➤ <b>${searchText}</b>`
        }
    
        function searchMovie() {
            let input = searchText
            input = input.toLowerCase();
            let allMovies = document.getElementById("allMovies");
            let x = document.getElementsByClassName('movie');
    
            for (i = 0; i < x.length; i++) {
                if (!x[i].innerHTML.toLowerCase().includes(input)) {
                    x[i].style.display = "none";
                    allMovies.style.justifyContent = "left";
                    allMovies.style.gap = "15px";
                }
                else {
                    x[i].style.display = "block";
                    document.getElementById('notFound').style.display = "none";
                }
            }
        }

        searchMovie();