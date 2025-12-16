// Wait for the document to be fully loaded before executing any code
document.addEventListener("DOMContentLoaded", function() {
    // Select vision, mission, events-content, and rooms-content elements
    var vision = document.querySelector('.vision');
    var mission = document.querySelector('.mission');
    var resContent = document.querySelector('.res-content')
    var eventsContent = document.querySelector('.events-content');
    var roomsContent = document.querySelector('.rooms-content');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;
        return elementPosition < screenPosition;
    }

    // Function to toggle visibility of elements
    function toggleVisibility() {
        // Toggle visibility of vision section
        if (isInViewport(vision)) {
            vision.classList.add('visible');
        } else {
            vision.classList.remove('visible'); // Remove the class if scrolled away
        }

        // Toggle visibility of mission section
        if (isInViewport(mission)) {
            mission.classList.add('visible');
        } else {
            mission.classList.remove('visible'); // Remove the class if scrolled away
        }

        // Toggle visibility of reservation content section
        if (isInViewport(resContent)) {
            resContent.classList.add('visible');
        } else {
            resContent.classList.remove('visible')
        }

        // Toggle visibility of events-content section
        if (isInViewport(eventsContent)) {
            eventsContent.classList.add('visible');
        } else {
            eventsContent.classList.remove('visible'); 
        }

        // Toggle visibility of rooms-content section
        if (isInViewport(roomsContent)) {
            roomsContent.classList.add('visible');
        } else {
            roomsContent.classList.remove('visible'); 
        }
    }

    // Call the toggleVisibility function when the page is scrolled
    window.addEventListener('scroll', toggleVisibility);

    // Call the toggleVisibility function when the page is loaded
    toggleVisibility();
});
