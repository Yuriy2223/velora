document.addEventListener('DOMContentLoaded', () => {
  const partnersItems = document.querySelectorAll('.partners-item');
  const partnersImages = document.querySelectorAll('.partners-img-wrap');

  if (window.innerWidth >= 1280) {
    partnersItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        partnersImages.forEach((img) => {
          img.style.opacity = '0';
        });

        if (partnersImages[index]) {
          partnersImages[index].style.opacity = '1';
        }
      });
    });

    const partnersList = document.querySelector('.partners-list');
    partnersList.addEventListener('mouseleave', () => {
      partnersImages.forEach((img) => {
        img.style.opacity = '0';
      });
    });
  }
});
