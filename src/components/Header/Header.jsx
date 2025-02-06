import React from 'react'; /* Importe la bibliothèque React */
import Logo from './assets/LOGO_index.png'; /* Importe le logo */
import Nav from './components/Nav'; /* Importe le composant Nav */

function Header() { 
  /* Composant Header qui contient le logo et la navigation */
  return ( 
    /* Retourne l'arborescence JSX qui sera affichée */
    <div id="Header"> {/* Retourne un élément div avec l'identifiant Header */}
      <img src={Logo} alt="Logo" />
      <a href="index.html">Accueil</a> 
      <a href="about.html">A propos</a>
      {/* Affiche le logo */}
      <Nav /> 
      {/* Affiche le composant Nav */}
    </div> 
    /* Fin de l'élément div */
  ); 
  /* Fin du retour */
} 
/* Fin du composant Header */

export default Header; /* Exporte le composant Header */