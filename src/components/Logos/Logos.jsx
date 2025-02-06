import React from 'react'                  /* Importe la bibliothèque React */
import logoImg from './assets/LOGO_index.png'   /* Importe l'image du logo */

function Logo() {                           /* Affiche le logo de l'appli */
  return (                                  /* Retourne l'arborescence JSX qui sera affichée */
    <div id="Logo">                         {/* Retourne un élément div avec l'identifiant Logo */}
      <img src={logoImg} alt="Logo" />      {/* Affiche l'image du logo */}
    </div>                                  /* Retourne un élément div avec l'identifiant Logo */
  );
}

export default Logo                    /* Exporte le composant Logo */