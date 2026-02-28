// document.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.nav-link');
//   const header = document.querySelector('header.header-section');

//   function getScrollPosition() {
//     if (document.body.style.position === 'fixed') {
//       return Math.abs(parseInt(document.body.style.top) || 0);
//     }

//     return window.scrollY;
//   }

//   function highlightActiveSection() {
//     const scrollY = getScrollPosition();
//     const headerHeight = header?.offsetHeight || 0;

//     if (scrollY < 100) {
//       navLinks.forEach((link) => link.classList.remove('active'));
//       return;
//     }

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop - headerHeight - 100;
//       const sectionHeight = section.offsetHeight;
//       const sectionId = section.getAttribute('id');

//       if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//         navLinks.forEach((link) => {
//           link.classList.remove('active');

//           if (link.getAttribute('href') === `#${sectionId}`) {
//             link.classList.add('active');
//             link.setAttribute('aria-current', 'true');
//           } else {
//             link.removeAttribute('aria-current');
//           }
//         });
//       }
//     });
//   }

//   window.addEventListener('scroll', highlightActiveSection);

//   highlightActiveSection();
// });

// ...............AbortController.apply...............
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('header.header-section');

  function getScrollPosition() {
    if (document.body.style.position === 'fixed') {
      return Math.abs(parseInt(document.body.style.top) || 0);
    }

    return window.scrollY;
  }

  function highlightActiveSection() {
    const scrollY = getScrollPosition();
    const headerHeight = header?.offsetHeight || 0;

    if (scrollY < 100) {
      navLinks.forEach((link) => link.classList.remove('active'));
      return;
    }

    let activeFound = false;

    // Перевіряємо секції від останньої до першої
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && !activeFound) {
        activeFound = true;

        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'true');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    }

    // Якщо жодна секція не активна, видаляємо всі active
    if (!activeFound) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
    }
  }

  window.addEventListener('scroll', highlightActiveSection);

  highlightActiveSection();
});
// ...............AbortController.apply...............

// document.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.nav-link');
//   const header = document.querySelector('header.header-section');

//   function getScrollPosition() {
//     if (document.body.style.position === 'fixed') {
//       return Math.abs(parseInt(document.body.style.top) || 0);
//     }

//     return window.scrollY;
//   }

//   function highlightActiveSection() {
//     const scrollY = getScrollPosition();
//     const headerHeight = header?.offsetHeight || 0;

//     if (scrollY < 100) {
//       navLinks.forEach((link) => link.classList.remove('active'));
//       return;
//     }

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop - headerHeight - 100;
//       const sectionHeight = section.offsetHeight;
//       const sectionId = section.getAttribute('id');

//       if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//         navLinks.forEach((link) => {
//           link.classList.remove('active');

//           if (link.getAttribute('href') === `#${sectionId}`) {
//             link.classList.add('active');
//             link.setAttribute('aria-current', 'true');
//           } else {
//             link.removeAttribute('aria-current');
//           }
//         });
//       }
//     });
//   }

//   window.highlightActiveSection = highlightActiveSection;

//   window.addEventListener('scroll', highlightActiveSection);

//   highlightActiveSection();
// });
