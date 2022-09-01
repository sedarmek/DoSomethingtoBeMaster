import React, { useState } from 'react';
import './Convertidor.css';

const Convertidor = () => {
  const [minutes, setMinutes] = useState(0);

  function convertMinutesToHours(minutes){
    return parseFloat(minutes/60).toFixed(2);
  }

  function updateTime(event){
    setMinutes(event.target.value);
  }
  return(
    <div className="Convertidor">
      <p>minutos=&#62;horas</p>
      <input type="number" className='convertidor_minutos' placeholder='minutos' onChange={updateTime}/>
      <p className="convertidor_horas">=&#62;{convertMinutesToHours(minutes)}</p>
    </div>
);}

export default Convertidor;
