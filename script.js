// Attendre que le DOM soit entièrement chargé avant d'ajouter l'événement
document.addEventListener('DOMContentLoaded', function () {
  // Ajout du gestionnaire d'événements pour le clic sur le bouton
  document.getElementById('calculate-btn').addEventListener('click', function () {
    // Récupérer les valeurs des champs du formulaire
    const distance = parseFloat(document.getElementById('distance').value);
    const days = parseInt(document.getElementById('days').value);

    // Vérifiez si les entrées sont valides
    if (isNaN(distance) || isNaN(days) || distance <= 0 || days <= 0) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }

    // Facteur d'émission moyen pour une voiture essence (0.12 kg CO2/km)
    const emissionFactor = 0.12;

    // Calculer les émissions de CO2
    const weeklyDistance = distance * 2 * days; // Aller-retour chaque jour travaillé
    const co2Emissions = weeklyDistance * emissionFactor;

    // Calculer le message du résultat
    const resultMessage = `Vos émissions hebdomadaires de CO2 sont de ${co2Emissions.toFixed(2)} kg.`;

    // Afficher la popup et insérer le résultat dans le textarea
    document.getElementById('result').value = resultMessage; // Insérer le texte dans le textarea
    document.getElementById('popup').style.display = 'block'; // Afficher la popup
  });

  // Fermeture de la popup
  document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none'; // Masquer la popup
  });
});

