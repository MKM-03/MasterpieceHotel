document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector('.banner');
    const links = document.querySelectorAll('.navbar ul li a');
    const heading = document.querySelector('.navbar h2');

    let initialLinkColor = '#000000'; // Initial color for links
    let initialHeadingColor = '#000000'; // Initial color for h2

    const scrolledLinkColor = 'rgb(133, 89, 9)'; // Color specified in CSS for links upon scrolling
    const scrolledHeadingColor = 'rgb(133, 89, 9)'; // Color specified in CSS for h2 upon scrolling

    const currentPageUrl = window.location.href;
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        if (link.href === currentPageUrl) {
            link.parentElement.classList.add('active');
        }
    });

    function toggleNavbar() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        banner.style.backgroundColor = scrollPosition > 0 ? '#ffffff' : 'transparent';

        links.forEach(link => {
            link.style.color = scrollPosition > 0 ? scrolledLinkColor : initialLinkColor;
        });
        heading.style.color = scrollPosition > 0 ? scrolledHeadingColor : initialHeadingColor;

        // Get the computed color of the links
        const computedLinkColor = window.getComputedStyle(links[0]).color;

        // Set the value of CSS variables to match the color of the links
        document.documentElement.style.setProperty('--link-color', computedLinkColor);
        document.documentElement.style.setProperty('--line-color', computedLinkColor);
    }

    function changeBackgroundImage(page) {
        const navbarContainer = document.querySelector('.navbar-container');
        const navbarHeading = document.querySelector('.navbar h2');
        const navbarLinks = document.querySelectorAll('.navbar ul li a');
        let height, imageUrl;

        switch (page) {
            case 'index.html':
                height = '100vh';
                imageUrl = 'images/hotel-front-view.webp';
                break;
            case 'events_news.html':
                height = '70vh';
                imageUrl = 'images/banner-longue.webp';
                initialHeadingColor = 'rgb(255,255,255)';
                initialLinkColor = 'rgb(255,255,255)';
                break;
            case 'rooms.html':
                height = '90vh';
                imageUrl = 'images/sample-room.webp';
                initialHeadingColor = 'rgb(0,0,0)';
                initialLinkColor = 'rgb(0,0,0)';
                break;
            case 'reservation.html':
                height = '85vh';
                imageUrl = 'images/reserve.webp';
                initialHeadingColor = 'rgb(255,255,255)';
                initialLinkColor = 'rgb(255,255,255)';
                break;
            case 'contact.html':
                height = '80vh';
                imageUrl = 'images/contact-us.webp';
                initialHeadingColor = 'rgb(0,0,0)';
                initialLinkColor = 'rgb(0,0,0)';
                break;
        }

        navbarContainer.style.height = height;
        navbarHeading.style.color = initialHeadingColor;
        navbarLinks.forEach(link => link.style.color = initialLinkColor);

        navbarContainer.style.backgroundImage = `url(${imageUrl})`;
    }

    function getCurrentPageName() {
        const currentPageUrl = window.location.pathname;
        return currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);
    }

    const currentPage = getCurrentPageName();
    changeBackgroundImage(currentPage);

    window.addEventListener('scroll', toggleNavbar);
    toggleNavbar();
});
