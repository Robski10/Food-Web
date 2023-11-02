/*const icons = document.querySelectorAll('.section-1-icons i');

setInterval(() => {
    const icon = document.querySelector('.section-1-icons.change')
    icon.classList.remove('change')
    icon.nextElementSibling.classList.add('change')

}, 1000);*/
const icons = document.querySelectorAll('.section-1-icons i');
let currentIndex = 0;

setInterval(() => {
    icons[currentIndex].classList.remove('change');
    const nextIndex = (currentIndex + 1) % icons.length;
    icons[nextIndex].classList.add('change');
    currentIndex = nextIndex;
}, 4000);

