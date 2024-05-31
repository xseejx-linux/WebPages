document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.getElementById('nav-menu');
    var lateralMenu = document.getElementById('lateral-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        lateralMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '<'; // Set button text to '<' when menu is active
        } else {
            menuToggle.textContent = '>'; // Set button text to '>' when menu is inactive
        }
    });
});
