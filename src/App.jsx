import React, { useState } from 'react'    /* Importe React et la fonction useState de la bibliothèque React */
import Layout from './components/Layout/Layout'   /* Importe le composant Layout*/
import Footer from './components/Footer/Footer'   /* Importe le composant Footer */

import Container from './components/Container/container'     /* Importe le composant Container */
import './App.css'                         /* Importe le fichier CSS */


function App() {      /* Composant principal qui assemble l'ensemble de l'application */
  const [state, setState] = useState(null); /* Déclare un état local avec useState */

  // Fonction pour vérifier les logs du serveur
  const verifierLogsServeur = async () => {

    /* -------------------------ERREUR NON RESOLUE PB SERVER ---------------------------------- */
    try {
      const response = await fetch('http://localhost:5174'); // Remplacez 'http://localhost:5174' par l'URL de votre serveur
      const logs = await response.json();
      console.log(logs);
    } catch (error) {
      console.error('Erreur lors de la vérification des logs du serveur:', error);
    }
  };

  return (            /* Retourne l'arborescence JSX qui sera affichée */
    <Layout>                  
      <Container />        
      <Footer />      
    </Layout>         /* Fin du composant Layout */
  );
}

export default App;    /* Exporte le composant App */

 