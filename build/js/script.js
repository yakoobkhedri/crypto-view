let hamIcon = document.getElementById('hamIcon');
let mobileMenu = document.getElementById('mobileMenu');
let close = document.getElementById('close');

hamIcon.addEventListener('click', function() {
    mobileMenu.classList.add('active');
})
close.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
})
// swiper

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    spaceBetween: 90,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 70,
        stretch: 70,
        depth: 80,
        modifier: 0,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});