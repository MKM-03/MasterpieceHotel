document.addEventListener("DOMContentLoaded", function () {
    var headings = document.querySelectorAll('.content h1');
    var offsHeading = document.querySelector('.offers');
    var faqsHeading = document.querySelector('.faqs-container');

    const faqs = document.querySelectorAll('.faqs');

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });


    function isInViewport(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;
        return elementPosition < screenPosition;
    }

    function toggleVisibility() {
        headings.forEach(function (heading) {
            if (isInViewport(heading)) {
                heading.classList.add('visible');
            } else {
                heading.classList.remove('visible');
            }
        });

        if (isInViewport(offsHeading)) {
            offsHeading.classList.add('visible');
        } else {
            offsHeading.classList.remove('visible');
        }

        if (isInViewport(faqsHeading)) {
            faqsHeading.classList.add('visible');
        } else {
            faqsHeading.classList.remove('visible');
        }
    }



    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Call the function initially
});
