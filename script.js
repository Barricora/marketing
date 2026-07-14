const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-billing]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-billing]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const billing = button.dataset.billing;
    document.querySelectorAll('.price strong[data-monthly]').forEach(price => {
      price.textContent = price.dataset[billing];
    });
  });
});

const form = document.querySelector('#demo-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const message = form.querySelector('.form-message');
  message.textContent = 'Demo form layout is ready. We will connect email delivery before launch.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
