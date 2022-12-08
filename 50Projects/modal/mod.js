const showMod = document.querySelector('.showMod');
const closeMod = document.querySelector('.closeMod');
const modal = document.querySelector('.modal');

showMod.addEventListener('click', () => {
    modal.classList.add('show');
})

closeMod.addEventListener('click', () => {
    modal.classList.remove('show');
})