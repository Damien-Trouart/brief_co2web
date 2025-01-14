document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
    const burgerIcon = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Ajouter un gestionnaire d'événements pour fermer le popup lorsque l'utilisateur clique en dehors de celui-ci
 /*   window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
*/
    // Ajouter un gestionnaire d'événements pour le menu burger
  /*  burgerIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    }); */
});
