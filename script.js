let headerBtn = document.querySelector(".button");
let headerMenu = document.querySelector(".header-menu");
let headerLinks = document.querySelectorAll(".header-link");

headerBtn.addEventListener("click", function(){
    if (headerMenu.classList.contains("menu-visible")){
        headerMenu.classList.remove("menu-visible");
    } else {
        headerMenu.classList.add("menu-visible");
    }
});

headerLinks.forEach((headerLinks) => {
    headerLinks.addEventListener("click", function(){
        headerMenu.classList.remove("menu-visible");
    })
})