import React from 'react'
/* Importe la bibliothèque React */

function RentList() {
  /* Liste des logements à louer */
  /* Pour l'instant, affiche quelques cartes statiques */
  /* Plus tard, tu pourras rendre ça dynamique en itérant sur tes données */
  return (
    /* Retourne l'arborescence JSX qui sera affichée */
    <div id="RentList">
      {/* Retourne un élément div avec l'identifiant rentList */}
      <div className="card">Logement 1</div>
      {/* Retourne une carte avec le texte Logement 1 */}
      <div className="card">Logement 2</div>
      {/* Retourne une carte avec le texte Logement 2 */}
      <div className="card">Logement 3</div>
      {/* Retourne une carte avec le texte Logement 3 */}
      {/* Ajoute d'autres cartes ou itère sur ton JSON de données */}
    </div>
  );
}

export default RentList
/* Exporte le composant RentList */