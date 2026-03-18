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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

const btnTop = document.createElement('button');
btnTop.id = 'backToTop';
btnTop.setAttribute('aria-label', 'Volver arriba');
btnTop.innerHTML = '↑';
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
