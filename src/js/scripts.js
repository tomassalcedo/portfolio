// Este archivo contiene el código JavaScript para agregar interactividad al portafolio.

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.proyecto-imagenes');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.imagenes');
        const images = imagesContainer.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            const offset = -index * 100;
            imagesContainer.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });
    });
});