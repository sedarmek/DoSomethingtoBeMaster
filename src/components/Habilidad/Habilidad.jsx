import './Habilidad.css';
import { React, useContext, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

import { HabilitiesContext } from '../containers/HomeBody/HomeBody'

function Habilidad(info) {
  
  const habilitiesContext = useContext(HabilitiesContext);

  function sendHabilityData(event){
    if(event.target.name === 'hours_input'){
      let valueReplaced = event.target.value.replace(',', '.')
      let valueEndedWithPoint = /\.$/.test(valueReplaced)

      if((!isNaN(Number(valueReplaced)))){
        let data = {
          index: info.keyToChild,
          name: habilitiesContext[info.keyToChild].name,
          hours: valueEndedWithPoint ? String(valueReplaced) : Number(valueReplaced)
        }
        info.getHabilityData(data);
      }
    }else if(event.target.name === 'name_input'){
      let data = {
        index: info.keyToChild,
        name: event.target.value,
        hours: habilitiesContext[info.keyToChild].hours
      }
      info.getHabilityData(data);
    }
  }
  function deleteHability(){
    info.deleteHability(info.keyToChild)
  }
  useEffect(()=>{

  },[])
  return(
    <div className="Habilidad">
      <input type="text" name="name_input" className="input_nombreHabilidad" placeholder='Escribe la habilidad' onChange={sendHabilityData} value={habilitiesContext[info.keyToChild].name}/>
      <input type="text" name="hours_input" className="input_horasHabilidad" placeholder='horas' onChange={sendHabilityData} value={habilitiesContext[info.keyToChild].hours} />
      <p>/1000 horas</p>
      <FaTrashAlt className='habilidad-icon_trash' onClick={deleteHability}/>
    </div>
  );
}

export default Habilidad;
