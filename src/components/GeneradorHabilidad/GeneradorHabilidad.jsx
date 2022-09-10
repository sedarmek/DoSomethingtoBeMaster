import React, { useContext } from 'react';
import './GeneradorHabilidad.css';

import Habilidad from '../Habilidad/Habilidad';
import { HabilitiesContext } from '../containers/HomeBody/HomeBody';

import { FaPlus } from "react-icons/fa";

function GeneradorHabilidad(info) {
  

  function incrementHabilidades(){
    info.IncrementarHabilidades();
  }
  function getHabilityData(data){
    info.UpdateHabilityData(data);
  }

  function printHabilidades(horas){
    let habilidades = horas;
    return (
            habilidades.map((hour, index) => {
              return <Habilidad key={index} keyToChild={index} getHabilityData={getHabilityData} deleteHability={info.deleteHability}></Habilidad>
              })
    )
  }

  const habilitiesContext = useContext(HabilitiesContext);
  return (
  <div className="GeneradorHabilidad" id='prueba'>
    {printHabilidades(habilitiesContext.map((value)=>value.hours))}
    <button className="GeneradorHabilidad_button" onClick={incrementHabilidades}><FaPlus/></button>
  </div>
  );
}

export default GeneradorHabilidad;
