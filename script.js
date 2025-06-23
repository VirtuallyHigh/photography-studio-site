document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#gallery .img-fluid');
  images.forEach(img => {
    img.addEventListener('mouseover', () => img.style.opacity = 0.8);
    img.addEventListener('mouseout', () => img.style.opacity = 1);
  });
});