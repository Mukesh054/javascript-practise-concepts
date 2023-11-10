

const button = document.querySelector('#open-popup');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('#close-btn');

button.addEventListener('click', () => {
    overlay.classList.add('show')
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show')
});