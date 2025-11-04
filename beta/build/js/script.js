let currentIndex = 1;
const totalImages = 3;

function updateImage(instant = false) {
    const slider = document.getElementById('imageSlider');

    if (instant) {
        slider.style.transition = 'none';
    } else {
        slider.style.transition = 'transform 0.5s ease';
    }

    slider.style.transform = `translateX(calc(-${currentIndex * 100}% - 1px))`;

    const indicators = document.querySelectorAll('.indicator');
    let displayIndex = currentIndex - 1;

    if (displayIndex < 0) displayIndex = totalImages - 1;
    if (displayIndex >= totalImages) displayIndex = 0;

    indicators.forEach((ind, idx) => {
        ind.classList.toggle('active', idx === displayIndex);
    });
}

function nextImage(event) {
    event.stopPropagation();        // Prevents click from reaching the <a> tag
    event.preventDefault();         // Prevents default button behavior
    currentIndex++;
    updateImage();

    // This shows if we're at the last clone, instantly jump to first real image
    if (currentIndex === totalImages + 1) {
        setTimeout(() => {
            currentIndex = 1;
            updateImage(true);
        }, 500);
    }
}

function previousImage(event) {
    event.stopPropagation();
    event.preventDefault();
    currentIndex--;
    updateImage();

    // This shows if we're at the first clone, instantly jump to last real image
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalImages;
            updateImage(true);
        }, 500);
    }
}

// Make indicators clickable
document.querySelectorAll('.indicator').forEach((indicator, idx) => {
    indicator.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        currentIndex = idx + 1;
        updateImage();
    });
});

updateImage(true);      // To initialize it