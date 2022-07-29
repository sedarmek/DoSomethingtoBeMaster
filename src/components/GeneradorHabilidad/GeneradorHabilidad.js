import React, { useState} from 'react';
import './GeneradorHabilidad.css';
import Habilidad from '../Habilidad/Habilidad'
function GeneradorHabilidad() {

  let [countHabilidades, updateHabilidades] = useState(1)

  function incrementHabilidades(){
    updateHabilidades(++countHabilidades)
  }
  function decrementHabilidades(){
    updateHabilidades(--countHabilidades)
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
  return (
  <div className="GeneradorHabilidad" id='prueba'>
    {printHabilidades()}
    <button className="GeneradorHabilidad_button" onClick={decrementHabilidades}>-</button>
    <button className="GeneradorHabilidad_button" onClick={incrementHabilidades}>+</button>
  </div>
  );
}

export default GeneradorHabilidad;
