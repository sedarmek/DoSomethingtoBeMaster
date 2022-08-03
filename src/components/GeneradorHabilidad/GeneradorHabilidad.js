import React, { useState } from 'react';
import './GeneradorHabilidad.css';
import Habilidad from '../Habilidad/Habilidad'

function GeneradorHabilidad(info) {
  let [countHabilidades, updateHabilidades] = useState(3)

  function incrementHabilidades(){
    updateHabilidades(++countHabilidades)
  }
  function decrementHabilidades(){
    if(countHabilidades > 0) updateHabilidades(--countHabilidades)
  }
  function printHabilidades(){
    let habilidades = Array.apply('valor', Array(countHabilidades))
    return (
          <div>
            {
            habilidades.map((value, index) => {
              return <Habilidad key={index}></Habilidad>
              })
            }
          </div>
    )
  }
  function sendCountHabilidadesToParent(){
    info.getCountHabilidadByChild(countHabilidades);
  }
  return (
  <div className="GeneradorHabilidad" id='prueba'>
    {printHabilidades()}
    <button className="GeneradorHabilidad_button" onClick={decrementHabilidades}>-</button>
    <button className="GeneradorHabilidad_button" onClick={incrementHabilidades}>+</button>
    <button className="GeneradorHabilidad_button" onClick={sendCountHabilidadesToParent}>Actualizar grafica</button>
  </div>
  );
}

export default GeneradorHabilidad;
