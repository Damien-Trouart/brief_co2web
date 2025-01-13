document.addEventListener('DOMContentLoaded', function() {
  const countdownDate = new Date('Sep 1, 2025 00:00:00').getTime();

  const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = `${days}<br><span>Jours</span>`;
      document.getElementById('hours').innerHTML = `${hours}<br><span>Heures</span>`;
      document.getElementById('minutes').innerHTML = `${minutes}<br><span>Minutes</span>`;
      document.getElementById('seconds').innerHTML = `${seconds}<br><span>Secondes</span>`;

      if (distance < 0) {
          clearInterval(countdown);
          document.getElementById('countdown').innerHTML = 'La fonctionnalité est maintenant disponible!';
      }
  }, 1000);

  const burgerIcon = document.querySelector('.burger-icon');
  const nav = document.querySelector('.header__nav');

  burgerIcon.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});
