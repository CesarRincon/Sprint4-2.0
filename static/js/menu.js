const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#sidemenu");

btn.addEventListener("click", e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
});

const menuExpanded = document.querySelector(".menu-expanded")

function hoverOnProductos() {
    document.getElementById("sub-list-productos").style.display = "block"
}
function hoverOnProveedores() {
    document.getElementById("sub-list-proveedor").style.display = "block"
}
function hoverOnUsuarios() {
    document.getElementById("sub-list-usuarios").style.display = "block"
}

function hoveroffProductos() {
    document.getElementById("sub-list-productos").style.display = "none"
}
function hoveroffProveedores() {
    document.getElementById("sub-list-proveedor").style.display = "none"
}
function hoveroffUsuarios() {
    document.getElementById("sub-list-usuarios").style.display = "none"
}