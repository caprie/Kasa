import React from 'react'  // Importe la bibliothèque React

function Footer() {   // Pied de page avec les informations de copyright
  return (   // Retourne l'arborescence JSX qui sera affichée
    <footer id="footer"> {/* Retourne un élément footer avec l'identifiant footer */}
      <p>© 2025 Kasa. Tous droits réservés.</p> {/* Affiche le texte du copyright */}
    </footer> // Fin de l'élément footer
  );
}

export default Footer // Exporte le composant Footer