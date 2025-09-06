window.addEventListener('scroll', function() {
  const arrow = document.querySelector('.scroll-down-arrow');
  if (!arrow) return;
  if (window.scrollY > 10) {
    arrow.style.opacity = '0';
    arrow.style.pointerEvents = 'none';
  } else {
    arrow.style.opacity = '1';
    arrow.style.pointerEvents = 'auto';
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('screenshot-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-modal');
    document.querySelectorAll('.popup-trigger').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImg.src = '';
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
});