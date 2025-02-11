import React from 'react'                           /* Importe biblio React */
import './nav.scss'
                                /* Importe fichier CSS */
function Nav() {                                    
  return (                                         
    <nav id="Nav">  
        <a href="/">Accueil</a>           
        <a href="/apropos">A Propos</a>     
    </nav>                                
  );                                                 /* Fin du retour */
}

export default Nav                                   /* Exporte le component Nav */
