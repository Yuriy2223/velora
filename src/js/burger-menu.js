document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-btn');
  const closeMenu = document.querySelector('.burger-btn-close');
  const navMenu = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const headerSection = document.querySelector('.header-section');

  const toggleMenu = (isOpen) => {
    navMenu.classList.toggle('active', isOpen);
    burgerMenu.classList.toggle('hidden', isOpen);
    burgerMenu.setAttribute('aria-expanded', isOpen);
    headerSection.classList.toggle('menu-open', isOpen);

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
  };

  burgerMenu.addEventListener('click', () => toggleMenu(true));
  closeMenu.addEventListener('click', () => toggleMenu(false));

  navLinks.forEach((link) =>
    link.addEventListener('click', () => toggleMenu(false))
  );

  document.addEventListener('click', (event) => {
    if (!navMenu.classList.contains('active')) return;

    if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
      toggleMenu(false);
    }
  });
});
// document.addEventListener('DOMContentLoaded', () => {
//   const burgerMenu = document.querySelector('.burger-btn');
//   const closeMenu = document.querySelector('.burger-btn-close');
//   const navMenu = document.querySelector('.header-nav');
//   const navLinks = document.querySelectorAll('.nav-link');
//   const headerSection = document.querySelector('.header-section');

//   const toggleMenu = (isOpen) => {
//     navMenu.classList.toggle('active', isOpen);
//     burgerMenu.classList.toggle('hidden', isOpen);
//     burgerMenu.setAttribute('aria-expanded', isOpen);
//     headerSection.classList.toggle('menu-open', isOpen);

//     if (isOpen) {
//       const scrollY = window.scrollY;
//       document.body.style.position = 'fixed';
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.width = '100%';
//     } else {
//       const scrollY = document.body.style.top;
//       document.body.style.position = '';
//       document.body.style.top = '';
//       document.body.style.width = '';

//       if (scrollY) {
//         window.scrollTo(0, parseInt(scrollY) * -1);
//       }

//       setTimeout(() => {
//         if (window.highlightActiveSection) {
//           window.highlightActiveSection();
//         }
//       }, 100);
//     }
//   };

//   burgerMenu.addEventListener('click', () => toggleMenu(true));
//   closeMenu.addEventListener('click', () => toggleMenu(false));

//   navLinks.forEach((link) =>
//     link.addEventListener('click', () => toggleMenu(false))
//   );

//   document.addEventListener('click', (event) => {
//     if (!navMenu.classList.contains('active')) return;

//     if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
//       toggleMenu(false);
//     }
//   });
// });
