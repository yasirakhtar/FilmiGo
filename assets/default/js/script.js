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
