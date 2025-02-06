import React from 'react'                         /* Importe la bibliothèque React */

function Nav() {                                    /* Composant Nav qui affiche la navigation */
  return (                                          /* Retourne l'arborescence JSX qui sera affichée */
    <nav id="Nav">                                  {/* Retourne un élément nav avec l'identifiant nav */}
      <ul>                                          {/* Retourne une liste non ordonnée */}
        <li><a href="/">Accueil</a></li>            {/* Élément de liste avec un lien vers la page d'accueil */}
        <li><a href="/apropos">À Propos</a></li>    {/* Élément de liste avec un lien vers la page À Propos */}
      </ul>                                         {/* Fin de la liste non ordonnée */}
    </nav>                                          
  );                                                 /* Fin du retour */
}

export default Nav                                 /* Exporte le composant Nav */
