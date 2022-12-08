
window.addEventListener('scroll', () => {
    let content = document.querySelector('.clearVision');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
});