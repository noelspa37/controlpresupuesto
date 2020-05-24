import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

export default function Formulario(props) {
  const { setGasto, setCrearGasto } = props;

  //state
  const [nombreGasto, setNombreGasto] = useState('');
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
      setError(true);
      return;
    }

    //crear objeto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    //eliminar alerta
    setError(false);

    //resetear formulario
    setNombreGasto('');
    setCantidadGasto('');
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos aquí</h2>

      {error ? (
        <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto' />
      ) : null}

      <div className='campo'>
        <label>Nombre Gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          onChange={(e) => setNombreGasto(e.target.value)}
          value={nombreGasto}
        ></input>
      </div>

      <div className='campo'>
        <label>Cantidad Gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          onChange={(e) => setCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        ></input>
      </div>

      <input type='submit' className='button-primary u-full-width'></input>
    </form>
  );
}
