// Scroll suave mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animación simple al hacer scroll (fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Elementos a animar
document.querySelectorAll('.card, .project, section').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Botón volver arriba (opcional)
const btnTop = document.createElement('button');
btnTop.innerText = '↑';
btnTop.id = 'backToTop';
document.body.appendChild(btnTop);

btnTop.style.position = 'fixed';
btnTop.style.bottom = '20px';
btnTop.style.right = '20px';
btnTop.style.padding = '10px 14px';
btnTop.style.borderRadius = '10px';
btnTop.style.border = 'none';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none';
btnTop.style.background = '#7c9cff';
btnTop.style.color = '#fff';
btnTop.style.fontWeight = 'bold';

// Mostrar botón al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

// Acción botón
btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});