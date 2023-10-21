let position = 0;
const container = document.querySelector('.image-container');

function nextImage() {
  position -= 810; //largeur images
  if (position < -2430) position = 0; //largeur * nbre images
  container.style.transform = `translateX(${position}px)`;
}

setInterval(nextImage, 4000); // défilement de 4sec