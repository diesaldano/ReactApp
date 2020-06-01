import React, { Fragment, useState } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'

function App() {

  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);


  return (
    <Fragment>
      <Header
       titulo="Prestamigo Ya!"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
        />
      </div>

    </Fragment>

  );
}

export default App;