import React from 'react'              // Importe la bibliothèque React
import Banner from './components/banner.jsx'          // Importe le composant Banner
import ForRent from './components/ForRent.jsx'       // Importe le composant forRent
import ReactDOM from 'react-dom/client' // Importe la bibliothèque ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


function Content() {                       // Zone principale qui contient la bannière et la section des logements
  return (                              // Retourne l'arborescence JSX qui sera affichée
    <Content id="Content">                    {/* Retourne un élément Content avec l'identifiant Content */}
      <Banner />                        {/* Affiche le composant Banner */}
      <forRent />                       {/* Affiche le composant forRent */}
    </Content>                             // Fin de l'élément Content
  );
}

export default Content                    // Exporte le composant Content
