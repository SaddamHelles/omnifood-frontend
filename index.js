const openMenu = document.querySelector('[name=menu-outline]');
const closeMenu = document.querySelector('[name=close-outline]');
const headerElement = document.querySelector('header');

openMenu.addEventListener('click', function () {
  headerElement.classList.add('nav-open');
});

closeMenu.addEventListener('click', function () {
  headerElement.classList.remove('nav-open');
});

const links = document.querySelectorAll('a:link');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log('href: ', href);

    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });

    if (href !== '#' && href.startsWith('#')) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      headerElement.classList.toggle('nav-open');
    }
  });
});

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  },
);

observer.observe(document.querySelector('.section-hero'));
