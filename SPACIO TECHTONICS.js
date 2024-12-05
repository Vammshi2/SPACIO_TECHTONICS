document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlides();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlides();
    });

    updateSlides(); // Initialize slides on load
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideCount = slides.children.length;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;

    const updateCarousel = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
        updateCarousel();
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel(); // Initialize position
});