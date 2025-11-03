const images = [
    'images/exhibition.avif',
    'images/image2.webp',
    'images/image3.webp'
];

let currentIndex = 0;

function updateImage() {
    const img = document.getElementById('productImage');
    img.src = images[currentIndex];

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((ind, idx) => {
        ind.classList.toggle('active', idx === currentIndex);
    });
}

function nextImage(event) {
    event.stopPropagation();  // Prevents click from reaching the <a> tag
    event.preventDefault();   // Prevents default button behavior
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage(event) {
    event.stopPropagation();
    event.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Make indicators clickable
document.querySelectorAll('.indicator').forEach((indicator, idx) => {
    indicator.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        currentIndex = idx;
        updateImage();
    });
});