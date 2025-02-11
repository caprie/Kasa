import logo from '../../assets/LOGO_index.png'      // import logo
import React from 'react';                              // Importe biblio React
import ReactDOM from 'react-dom/client';                // Importe biblio ReactDOM
import './banner.css';                                  // Importe fichier CSS

function Banner() {                                     // Déclare composant Banner
  return (                                              // Retourne l'arborescence JSX qui sera affichée
    <div id="Banner">                                   {/* Retourne elemt div avec l'ID Banner */}
      <img src="path/to/your/image.jpg" alt="Banner" /> {/* Retourne une img avec chemin de l'img + txt alternatif */}
      <h1>Chez vous, partout et ailleurs</h1>           {/* Retourne titre */}
    </div>                                              // Ferme elemt div
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));    // Crée racine ReactDOM
root.render(<Banner />);                                              // Affiche composant Banner dans racine

export default Banner;                                                // Exporte composant Banner