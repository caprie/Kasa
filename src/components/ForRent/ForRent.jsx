import React from 'react';              /* Importe la bibliothèque React */
import RentList from './components/RentList.jsx';      /* Importe le composant RentList */

function ForRent() {                    /* Section qui englobe la liste des logements */
  return (                              /* Retourne l'arborescence JSX qui sera affichée */
    <section id="ForRent">              {/* Retourne un élément section avec l'identifiant forRent */}
      <RentList />                      {/* Affiche le composant RentList */}
    </section>                          /* Fin de l'élément section */
  );
}

export default ForRent;                 /* Exporte le composant ForRent */
