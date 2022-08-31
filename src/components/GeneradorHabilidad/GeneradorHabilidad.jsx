import React, { useContext } from 'react';
import './GeneradorHabilidad.css';

import Habilidad from '../Habilidad/Habilidad';
import { HabilitiesContext } from '../containers/Cuerpo/Cuerpo';

import { FaPlus, FaMinus } from "react-icons/fa";

function GeneradorHabilidad(info) {
  

  function incrementHabilidades(){
    info.IncrementarHabilidades();
  }
  function decrementHabilidades(){
    if(habilitiesContext.length > 1) {
      info.DecrementarHabilidades();
    }
  }
  
  function printHabilidades(horas){
    let habilidades = horas;
    return (
          <div>
            {
            habilidades.map((hour, index) => {
              return <Habilidad key={index} keyToChild={index} getHabilityData={getHabilityData}></Habilidad>
              })
            }
          </div>
    )
  }

  function getHabilityData(data){
    info.UpdateHabilityData(data);
  }
  const habilitiesContext = useContext(HabilitiesContext);
  return (
  <div className="GeneradorHabilidad" id='prueba'>
    {printHabilidades(habilitiesContext.map((value)=>value.hours))}
    <button className="GeneradorHabilidad_button" onClick={decrementHabilidades}><FaMinus/></button>
    <button className="GeneradorHabilidad_button" onClick={incrementHabilidades}><FaPlus/></button>
  </div>
  );
}

export default GeneradorHabilidad;
