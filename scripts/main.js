
window.onscroll = function (){
    scrollFunction();
    // config.log ("Scrolling...");
}



function openNav () {
    document.getElementById("main-nav").style.width = "100%";
}

function closeNav () {
    document.getElementById("main-nav").style.width = "0"
}

function scrollFunction () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("main-menu").classList.add("main-menu--active");
        document.getElementById("main-menu__open-btn").classList.add("main-menu__open-btn--active");

    } else {
        document.getElementById("main-menu").classList.remove("main-menu--active");
        document.getElementById("main-menu__open-btn").classList.remove("main-menu__open-btn--active");

    }
}