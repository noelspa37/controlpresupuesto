import React, { Fragment, useState } from 'react';
import Error from './Error';

export default function Pregunta(props) {
  const { setPresupuesto, setPreguntaPresupuesto, setRestante } = props;
  // definir state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Validar el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Enviar presupuesto al componente principal
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPreguntaPresupuesto(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje='El presupuesto es incorrecto' /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Agrega tu presupuesto'
          onChange={(e) => setCantidad(parseInt(e.target.value), 10)}
          //value={cantidad}
        ></input>
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir presupuesto'
        ></input>
      </form>
    </Fragment>
  );
}
