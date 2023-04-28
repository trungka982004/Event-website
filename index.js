let MenuBtn = document.querySelector("#MenuBtn")
let Navbar = document.querySelector("header .navbar")

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times")
    Navbar.classList.toggle("active")
}