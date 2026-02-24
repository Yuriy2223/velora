document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('contact-modal');
  let lastFocused = null;

  document.querySelectorAll('[data-modal="contact"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      lastFocused = btn;
      overlay.removeAttribute('aria-hidden');
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.querySelector('.modal-close').addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
