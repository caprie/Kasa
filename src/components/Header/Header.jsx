import React from 'react';                    /* Importe biblio React */
import Logo from '../../assets/LOGO_index.png';   /* Importe logo */
import Nav from '../Nav/Nav';           /* Importe component Nav */
import './header.scss';                        /* Importe fichier CSS */

function Header() {                           /* component Header avec logo + navigation */
  return (                                    /* Retourne arborescence JSX qui sera affichée */
    <div id="Header">                         {/* Retourne elemt div avec identifiant Header */}
      <img src={Logo} alt="Logo" />           {/* Retourne img avec logo + txt alternatif */}
      <Nav />                                 {/* Affiche component Nav */}
    </div> 
    
  );                                           {/* Fin retour */}
}                                              {/* Fin component Header */}


export default Header;                         /* Exporte component Header */