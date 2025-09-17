// === Toggle menú móvil ===
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// === Scroll suave + cerrar menú después de clic ===
(document.querySelectorAll('a[href^="#"]')).forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }

    // cerrar menú después del clic en móvil
    mobileMenu.classList.remove('active');
  });
});


// === Dark mode ===
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// === Animaciones al hacer scroll (recurrentes) ===
const sections = document.querySelectorAll('.fade-in-left, .fade-in-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      // Se quita para que la animación se reinicie al volver a entrar
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// === Formulario (demo) ===
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensaje enviado correctamente!');
  contactForm.reset();
});

/* AGREGADO AHORA  -------------------------------------------------- */

// === Scroll suave para los enlaces del menú ===
const allLinks = document.querySelectorAll('a[href^="#"]');

(document.querySelectorAll('a[href^="#"]')).forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // ajusta según la altura de tu header
        behavior: 'smooth'
      });
    }

    // Cerrar menú en responsive después de hacer clic
    mobileMenu.classList.remove('active');
  });
});
