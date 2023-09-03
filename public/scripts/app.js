
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $logo = $(".nav-logo");
        var $navlinks = $(".nav-links");
        if ($(window).width() > 1100) {
            $logo.toggleClass("show", $(this).scrollTop() > $nav.height());
            $navlinks.toggleClass("scrolled-nav-links", $(this).scrollTop() > $nav.height());
         }
       
    });
});  


// Navbar hamburger event listeners

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-links");
const closeBurger = document.querySelector('.hamburger-close');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navList.classList.add("appear");
    closeBurger.classList.remove("hidden");
});

closeBurger.addEventListener('click', () => {
    navList.classList.remove("appear");
    closeBurger.classList.add("hidden");
})

// Scroll on click

const servicesBtn = document.querySelectorAll(".services");
const servicesSection = document.querySelector(".section-five");
servicesBtn.forEach(element => element.addEventListener('click', function (e) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
    e.preventDefault();
}));

const aboutBtn = document.querySelector(".about");
const aboutSection = document.querySelector(".section-three");
aboutBtn.addEventListener('click',  function (e) {
    aboutSection.scrollIntoView({ behavior: "smooth"});
    e.preventDefault();
});

const connectBtn = document.querySelector(".connect");
const connectSection = document.querySelector(".section-six");
connectBtn.addEventListener('click', function (e) {
    connectSection.scrollIntoView({ behavior: "smooth" });
    e.preventDefault();   
});