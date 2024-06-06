// Lateral Bar Button Function //
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.getElementById('nav-menu');
    var lateralMenu = document.getElementById('lateral-menu');
    var body = document.body;
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        lateralMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('active');
        
        // Update button text based on menu state

        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '<'; // Set button text to '<' when menu is active
        } else {
            menuToggle.textContent = '>'; // Set button text to '>' when menu is inactive
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const clickableTexts = document.querySelectorAll('.clickable');
    const images = document.querySelectorAll('.hover-image');

    clickableTexts.forEach((clickableText, index) => {
        const image = clickableText.nextElementSibling;
        
        clickableText.addEventListener('click', () => {
            if (image.style.display === 'none' || image.style.display === '') {
                image.style.display = 'inline';
            } else {
                image.style.display = 'none';
            }
        });
    });
});