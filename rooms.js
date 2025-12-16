document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-container > div');

    // Show rooms section by default
    document.getElementById('rooms').style.display = 'block';

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            // Toggle visibility of all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show or hide the target section
            if (targetSection.style.display === 'none' || targetSection.style.display === '') {
                targetSection.style.display = 'block';
                targetSection.style.opacity = 1; // Make content visible
            } else {
                targetSection.style.display = 'none';
                targetSection.style.opacity = 0; // Hide content
            }
        });
    });
});
