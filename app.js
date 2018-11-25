window.onscroll = () => stickTheNav();
const navBar = document.querySelector(".mainNav");
const subNav = document.getElementById("subNavContent");
const sticky = navBar.offsetTop;
function stickTheNav() {
    console.log("działa");
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky");
        subNav.classList.add("sticky__subNav")
    } else {
        navBar.classList.remove("sticky");
        subNav.classList.remove("sticky__subNav");
    }
}
const subNavButton = document.querySelector(".subnavbtn");
subNavButton.addEventListener("click",(e)=>{
    e.preventDefault();
    subNav.classList.toggle("hidden")});

const hamburgerMenu = document.querySelector(".container");
const menuToHIde =  document.querySelector("#navBar");
hamburgerMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("change");
    menuToHIde.classList.toggle("hiddenMenu")

    });