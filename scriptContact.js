document.addEventListener('DOMContentLoaded', function() {
  const openPopupBtn = document.getElementById('open-popup-btn');
  const closePopupBtn = document.getElementById('close-popup');
  const popup = document.getElementById('popup');

  openPopupBtn.addEventListener('click', function() {
      popup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
  });
});
