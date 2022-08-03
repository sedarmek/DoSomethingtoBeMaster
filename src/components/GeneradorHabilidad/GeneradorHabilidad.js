import React, { useEffect, useState } from 'react';
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
  function printHabilidades(cantidad){
    let habilidades = Array.apply('valor', Array(cantidad))
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
  function sendCountHabilidadesToParent(numberHabilidades){
    info.getCountHabilidadByChild(numberHabilidades);
  }
  useEffect(()=>{
    sendCountHabilidadesToParent(countHabilidades)
  })
  return (
  <div className="GeneradorHabilidad" id='prueba'>
    {printHabilidades(countHabilidades)}
    <button className="GeneradorHabilidad_button" onClick={decrementHabilidades}>-</button>
    <button className="GeneradorHabilidad_button" onClick={incrementHabilidades}>+</button>
  </div>
  );
}

export default GeneradorHabilidad;
