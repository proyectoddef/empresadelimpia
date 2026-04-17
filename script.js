const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 760) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
