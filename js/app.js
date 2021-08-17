const navbarToggle = document.querySelector('.navbar-icon-toggle');

function showNavbarMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    
    navbarMenu.classList.toggle('show-navbar-menu');
}

if (navbarToggle) {
    navbarToggle.addEventListener('click', showNavbarMenu);
}