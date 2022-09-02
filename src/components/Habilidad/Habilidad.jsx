import './Habilidad.css';
import { React, useContext } from 'react';

import { HabilitiesContext } from '../containers/Cuerpo/Cuerpo'

function Habilidad(info) {

  function sendHabilityData(event){
    if(event.target.type === 'number'){
      let data = {
        index: info.keyToChild,
        name: habilitiesContext[info.keyToChild].name,
        hours: event.target.value
      }
      info.getHabilityData(data);
    }else if(event.target.type === 'text'){
      let data = {
        index: info.keyToChild,
        name: event.target.value,
        hours: habilitiesContext[info.keyToChild].hours
      }
      info.getHabilityData(data);
    }
  }
  const habilitiesContext = useContext(HabilitiesContext);

  return(
    <div className="Habilidad">
      <input type="text" className="input_nombreHabilidad" placeholder='Escribe la habilidad' onChange={sendHabilityData} value={habilitiesContext[info.keyToChild].name}/>
      <input type="number" className="input_horasHabilidad" placeholder='horas' onChange={sendHabilityData} max={250} id="input_hourHabilidad"/>
      <p>{habilitiesContext[info.keyToChild].hours}/1000 horas</p>
    </div>
  );
}

export default Habilidad;
