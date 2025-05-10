 function openLightbox(img) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    }

    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }