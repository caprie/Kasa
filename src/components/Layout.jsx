import React from 'react'                  // Importe la bibliothèque React

function Layout({ children }) {             // Composant global qui englobe toute l'appli
  return <div id="Layout">{children}</div>;  // Retourne un élément div avec l'identifiant Layout    
}

export default Layout                     // Exporte le composant Layout