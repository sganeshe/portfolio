// This function replaces the feather-icons placeholders with actual SVG icons.
feather.replace();

// This code handles smooth scrolling for anchor links (e.g., clicking "About" scrolls smoothly to the about section).
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only scroll smoothly if the href is more than just a '#'
        if (href && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            // Ensure the target element exists before trying to scroll
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});