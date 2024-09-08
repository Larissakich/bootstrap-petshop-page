window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('on-scroll');
    } else {
        header.classList.remove('on-scroll');
    }
});