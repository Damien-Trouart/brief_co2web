document.getElementById('calculate-btn').addEventListener('click', function() {
  // Récupérer les valeurs des champs du formulaire
  const distance = parseFloat(document.getElementById('distance').value);
  const days = parseInt(document.getElementById('days').value);

  // Facteur d'émission moyen pour une voiture essence (0.12 kg CO2/km)
  const emissionFactor = 0.12;

  // Calculer les émissions de CO2
  const weeklyDistance = distance * 2 * days; // Aller-retour chaque jour travaillé
  const co2Emissions = weeklyDistance * emissionFactor;

  // Afficher le résultat
  document.getElementById('result').innerText = `Vos émissions hebdomadaires de CO2 sont de ${co2Emissions.toFixed(2)} kg.`;
});
