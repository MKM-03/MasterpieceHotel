document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector('.banner');
    const links = document.querySelectorAll('.navbar ul li a');
    const heading = document.querySelector('.navbar h2');

    let initialLinkColor = '#000000';
    let initialHeadingColor = '#000000';

    const scrolledLinkColor = 'rgb(133, 89, 9)';
    const scrolledHeadingColor = 'rgb(133, 89, 9)';

    // Highlight active nav link
    const currentPageUrl = window.location.href;
    document.querySelectorAll('.navbar ul li a').forEach(link => {
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

        const computedLinkColor = window.getComputedStyle(links[0]).color;
        document.documentElement.style.setProperty('--link-color', computedLinkColor);
        document.documentElement.style.setProperty('--line-color', computedLinkColor);
    }

    function getCurrentPage() {
        const path = window.location.pathname;

        // GitHub Pages homepage (/, /repo/)
        if (path.endsWith('/')) {
            return 'index';
        }

        // Other pages
        return path.substring(path.lastIndexOf('/') + 1);
    }

    function changeBackgroundImage(page) {
        const navbarContainer = document.querySelector('.navbar-container');
        const navbarHeading = document.querySelector('.navbar h2');
        const navbarLinks = document.querySelectorAll('.navbar ul li a');

        let height = '100vh';
        let imageUrl = '';

        switch (page) {
            case 'index':
            case 'index.html':
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
                break;
        }

        navbarContainer.style.height = height;
        navbarHeading.style.color = initialHeadingColor;
        navbarLinks.forEach(link => link.style.color = initialLinkColor);

        if (imageUrl) {
            navbarContainer.style.backgroundImage = `url(${imageUrl})`;
        }
    }

    const currentPage = getCurrentPage();
    changeBackgroundImage(currentPage);

    window.addEventListener('scroll', toggleNavbar);
    toggleNavbar();
});
