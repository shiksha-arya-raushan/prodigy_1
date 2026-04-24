onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    boxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if (position < screen - 100) {
            box.style.opacity = 1;
            box.style.transform = "translateY(0)";
        }
    });
});