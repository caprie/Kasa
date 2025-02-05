import { useState } from 'react'           // Importe la fonction useState de la bibliothèque React
import React from 'react'                  // Importe la bibliothèque React
import Layout from '/components/Layout.jsx'   // Importe le composant Layout
import Header from './Header.jsx'   // Importe le composant Header
import Footer from './Footer.jsx'   // Importe le composant Footer
import Content from './Content.jsx'         // Importe le composant Content
import './App.css'                         // Importe le fichier CSS

//import reactLogo from './assets/react.svg' // This is the original import
//import viteLogo from '/vite.svg' // This is the original import


function App() {      // Composant principal qui assemble l'ensemble de l'application
  return (            // Retourne l'arborescence JSX qui sera affichée//
    <Layout>          {/* Retourne le composant Layout */}
      <Header />      {/* Retourne le composant Header */}
      <Content />        {/* Retourne le composant Content */}
      <Footer />      {/* Retourne le composant Footer */}
    </Layout>         // Fin du composant Layout
  );
}

export default App    // Exporte le composant App

 