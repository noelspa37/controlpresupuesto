import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  // defefinir setstate
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState();
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  const [crearGasto, setCrearGasto] = useState(false);
  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);

  //useEffect para guardar los gastos
  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      setGastos(listadoGastos);

      //Restar gasto para actualizar restante
      const presupuestoRestante = restante - gasto.cantidadGasto;
      setRestante(presupuestoRestante);

      //una vez que se agrega se retorna a false
      setCrearGasto(false);
    }
  }, [crearGasto, gastos, gasto, restante]);

  return (
    <div className='App container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          {preguntaPresupuesto ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setPreguntaPresupuesto={setPreguntaPresupuesto}
              setRestante={setRestante}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className='one-half column'>
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
