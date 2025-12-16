document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0; // Set initial slide index to 0

    // manual navigation
    var manualNav = function (manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        dots.forEach((dot) => {
            dot.classList.remove('active');
        });

        slides[manual].classList.add('active');
        dots[manual].classList.add('active');
        currentSlide = manual; // Update current slide index
    };

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            manualNav(i);
        });
    });

    // Button navigation
    prevBtn.addEventListener("click", function () {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        manualNav(currentSlide);
    });

    nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        manualNav(currentSlide);
    });

    // autoplay script
    var repeat = function () {
        let i = 0;

        var repeater = () => {
            setTimeout(function () {
                manualNav(i);

                i = (i === slides.length - 1) ? 0 : i + 1;
                repeater();
            }, 5000); // 5 seconds autoplay interval
        };

        repeater();
    };

    repeat();
});
