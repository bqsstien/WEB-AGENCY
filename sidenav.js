//Affectation des IDs HTML à mes constantes JS
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

//Ajoute la classe "active" à la sidenav ( right:0)
function openNav() {
    sidenav.classList.add("active");
}

//Retire la classe "active" à la sidenav (right: -1000px)
function closeNav() {
    sidenav.classList.remove("active");
}

//Event Listener sur le click
openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
