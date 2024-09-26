document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const sliderContainer = document.querySelector('.slider-container');
    let currentIndex = 0;
    const slideInterval = 3000; // Interval time in milliseconds (e.g., 3000ms = 3 seconds)
    let autoSlide; // Variable to store the interval

    function showSlide(index) {
        const sliderWidth = sliderContainer.clientWidth; // Get the width of the slider container
        const translateValue = -index * sliderWidth; // Calculate the translateX value
        sliderContainer.querySelector('.slider').style.transform = `translateX(${translateValue}px)`; // Apply the transformation
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Automatically move to the next slide at the specified interval
    autoSlide = setInterval(nextSlide, slideInterval);

    // Pause the slider on hover
    sliderContainer.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    // Resume the slider when not hovering
    sliderContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, slideInterval);
    });

    // Initial display of the first slide
    showSlide(currentIndex);

    // Testimonials functionality
    const testimonialsWindow = document.getElementById('testimonials-window');
    const closeTestimonialsBtn = document.getElementById('close-testimonials');

    function showTestimonials(text) {
        const testimonialText = document.getElementById('testimonial-text');
        testimonialText.innerHTML = text;  // Set the testimonial text
        testimonialsWindow.style.display = 'block';  // Show the modal
    }

    function closeTestimonials() {
        testimonialsWindow.style.display = 'none';  // Hide the modal
    }

    // Automatically show the testimonials window on page load
    showTestimonials("This is an example testimonial that appears automatically on page load.");

    // Close button functionality
    closeTestimonialsBtn.addEventListener('click', closeTestimonials);

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === testimonialsWindow) {
            closeTestimonials();
        }
    });
});
