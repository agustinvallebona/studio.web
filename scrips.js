// Espera que el sitio cargue
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio listo.");

  // Animación general para secciones circulares
  ScrollReveal().reveal('.section', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-out',
    reset: true
  });

  // Animación especial para la sección de contacto
  ScrollReveal().reveal('.contacto', {
    duration: 1200,
    origin: 'bottom',
    distance: '60px',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
  });
});


