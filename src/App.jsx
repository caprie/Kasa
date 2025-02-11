import React, { useState } from 'react'                 /* Importe React + function useState de biblio React */
import Header from './components/Header/Header'     /* Importe component Header */       
import Footer from './components/Footer/Footer'         /* Importe component Footer */

 


function App() {                                         /* Component principal assemble toute application */
 
  return ( 
    <>                                                   {/* fragment */  }                                              
    <Header />           
      <Footer /> 
    </>                                                 
  );
}

export default App;                                           /* Exporte component App */

 