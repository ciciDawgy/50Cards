const openMe = document.getElementById('open');
const closeMe = document.getElementById('close');
const modalContainer = document.getElementById('modal-container');

openMe.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

closeMe.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})