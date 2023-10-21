/*let position = 0;
const container = document.querySelector('.image-container');

function nextImage() {
  let screenWidth = window.innerWidth; // Récupère la largeur de l'écran

  if (screenWidth > 768) {
    position -= 798;
    if (position < -2430) position = 0; // largeur * nbre images
  } else {
    position -= 323.5;
    if (position < -997.5) position = 0; // largeur * nbre images
  }

  container.style.transform = `translateX(${position}px)`;
}

setInterval(nextImage, 4000); // défilement de 4sec*/

const container = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function updateCarousel() {
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // Défilement automatique toutes les 3 secondes

// Si tu veux que le défilement soit proportionnel à la taille de l'écran, tu peux utiliser la règle suivante :
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  const imageWidth = 810; // Largeur originale des images
  const numImages = images.length;
  const containerWidth = imageWidth * numImages;

  container.style.width = `${containerWidth}px`;
  images.forEach(img => {
    img.style.width = `${windowWidth / numImages}px`;
  });

  currentIndex = currentIndex % numImages;
  updateCarousel();
});
