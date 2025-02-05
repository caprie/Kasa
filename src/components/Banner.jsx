import React from 'react'              // Importe la bibliothèque React

function Banner() {                     // Composant Banner qui affiche la bannière d'accueil
  return (                              // Retourne l'arborescence JSX qui sera affichée
    <div id="banner">                   {/* Retourne un élément div avec l'identifiant banner */}
      <h1>Bienvenue sur Kasa</h1>       {/* Affiche le titre de la bannière */}
    </div>                              // Fin de l'élément div
  );
}

export default Banner                 // Exporte le composant Banner