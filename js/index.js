// Lateral Bar Button Function //
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.getElementById('nav-menu');
    var lateralMenu = document.getElementById('lateral-menu');
    var home = document.getElementById('Home');
    var body = document.body;
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        lateralMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        home.classList.toggle('active');
        body.classList.toggle('active');
        
        // Update button text based on menu state

        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '<'; // Set button text to '<' when menu is active
        } else {
            menuToggle.textContent = '>'; // Set button text to '>' when menu is inactive
        }
    });
});

// SLIDE SHOW FUNCTION //
document.addEventListener('DOMContentLoaded', function() {
    // Select all image elements within the slideshow container
    const slides = document.querySelectorAll('.slideshow img');
    const customLinks = document.querySelectorAll('.custom-link');
    const customP = document.querySelectorAll('.custom-p');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    // Initialize a variable to keep track of the current slide index
    let currentSlide = 0;

    // Function to show a specific slide by adding or removing the 'active' class
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if(i === index){
                // If the index matches the current slide index, add the 'active' class to the slide
                slide.classList.add('active');
                // Remove the 'hidden' class from the corresponding custom link
                customLinks[i].classList.remove('hidden');
                customP[i].classList.remove('hidden');
            } else {
                // If the index does not match the current slide index, remove the 'active' class from the slide
                slide.classList.remove('active');
                // Add the 'hidden' class to the corresponding custom link
                customLinks[i].classList.add('hidden');
                customP[i].classList.add('hidden');
            }
        });
    }

    // Function to move to the previous slide
    function prevSlide() {
        // Decrement the current slide index
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        // Show the previous slide
        showSlide(currentSlide);
    }

    // Function to move to the next slide
    function nextSlide() {
        // Increment the current slide index and ensure it wraps around using the modulus operator
        currentSlide = (currentSlide + 1) % slides.length;
        // Show the next slide
        showSlide(currentSlide);
    }

    // Function to automatically move to the next slide
    function autoNextSlide() {
        // Move to the next slide
        nextSlide();
    }

    // Initially, show the first slide when the page loads
    showSlide(currentSlide);

    // Set event listeners for the previous and next buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Automatically move to the next slide every 5 seconds
    setInterval(autoNextSlide, 5000);
});
