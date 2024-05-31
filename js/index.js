// Lateral Bar Button Function //
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

// Slide Show Function //
document.addEventListener('DOMContentLoaded', function() {
    // Select all image elements within the slideshow container
    const slides = document.querySelectorAll('.slideshow img');

    // Initialize a variable to keep track of the current slide index
    let currentSlide = 0;

    // Function to show a specific slide by adding or removing the 'active' class
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if(i === index){
                // If the index matches the current slide index, add the 'active' class
                slide.classList.add('active');
            }else{
                // If the index does not match the current slide index, remove the 'active' class
                slide.classList.remove('active');
            }
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        // Increment the current slide index and ensure it wraps around using the modulus operator
        currentSlide = (currentSlide + 1) % slides.length;
        // Show the next slide
        showSlide(currentSlide);
    }

    // Initially, show the first slide when the page loads
    showSlide(currentSlide);

    // Set an interval to automatically change slides every 5 seconds
    setInterval(nextSlide, 5000);
});