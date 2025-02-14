// Dark Mode umschalten
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Farbwechsel-Thema umschalten
document.getElementById("colorSwitch").addEventListener("click", () => {
    const colors = ["#0056A8", "#00aaff", "#FF6347", "#32CD32"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Slider Automatisch abspielen
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000);

// Lightbox-Effekt für Bilder
const lightboxImages = document.querySelectorAll('.lightbox');
lightboxImages.forEach(image => {
    image.addEventListener('click', () => {
        const largeImage = document.createElement('img');
        largeImage.src = image.src;
        largeImage.style.position = 'fixed';
        largeImage.style.top = '50%';
        largeImage.style.left = '50%';
        largeImage.style.transform = 'translate(-50%, -50%)';
        largeImage.style.maxWidth = '90%';
        largeImage.style.maxHeight = '90%';
        document.body.appendChild(largeImage);
        largeImage.addEventListener('click', () => {
            document.body.removeChild(largeImage);
        });
    });
});