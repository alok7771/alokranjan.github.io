// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.topnav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    nav.style.display = isOpen ? 'flex' : '';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#F7F5EE';
    nav.style.padding = '1rem 2rem';
    nav.style.borderBottom = '1px solid #D8D2BE';
  });

  // Close menu after tapping a link
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      nav.style.display = '';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
