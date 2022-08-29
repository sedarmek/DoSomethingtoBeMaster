import './Habilidad.css';
import { React, useContext } from 'react';

import { FaPenSquare } from "react-icons/fa";

import { HabilitiesContext } from '../Cuerpo/Cuerpo'

function Habilidad(info) {

  function sendHourToParent(hora) {
    info.GetHourOfChildToParent(hora.target.value, info.keyToChild);
  }
  // actualiza la data del contexto
  function updateContextHoursTest(hora){
    habilitiesContext[info.keyToChild].hours = Number(hora.target.value);
  }
  const habilitiesContext = useContext(HabilitiesContext)

  return(
    <div className="Habilidad">
      <FaPenSquare className='icono_pen'></FaPenSquare>
      <input type="text" className="input_nombreHabilidad" placeholder='Escribe la habilidad'/>
      <input type="number" className="input_horasHabilidad" placeholder='horas' onChange={sendHourToParent} max={250} id="input_hourHabilidad"/>
      {/* value={habilitiesContext[info.keyToChild].hours} */}
      <p>{habilitiesContext[info.keyToChild].hours}/1000 horas</p>
    </div>
  );
}

export default Habilidad;
