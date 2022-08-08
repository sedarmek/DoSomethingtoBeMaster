import React, { useState } from 'react';
import './Cuerpo.css';

import Canvas from '../Canvas/Canvas'
import Cronometro from '../Cronometro/Cronometro'
import Convertidor from '../Convertidor/Convertidor'
import GeneradorHabilidad from '../GeneradorHabilidad/GeneradorHabilidad';

function Cuerpo() {
  const defaultNumberHabilities = 3;
  const defaultHour = 50;
  
  let [horasHabilidades, setHorasHabilidades] = useState(Array(defaultNumberHabilities).fill(defaultHour))

  function incrementarHabilidades(){
    setHorasHabilidades([...horasHabilidades, defaultHour])
  }
  function decrementarHabilidades(){
    setHorasHabilidades(horasHabilidades.slice(0, horasHabilidades.length-1))
  }

  function actualizarHorasDeHabilidad(hourChild, indexChild) {
    setHorasHabilidades(()=>{
      horasHabilidades = [...horasHabilidades]
      horasHabilidades.splice(indexChild, 1, parseInt(hourChild))
      return horasHabilidades
    })
  }

  return (
    <div className="Cuerpo">
      <Canvas HorasHabilidades={horasHabilidades}/>
      <GeneradorHabilidad className='GeneradorHabilidad' HorasHabilidades={horasHabilidades} IncrementarHabilidades={incrementarHabilidades} DecrementarHabilidades={decrementarHabilidades} ActualizarHorasDeHabilidad={actualizarHorasDeHabilidad}/>
      <Cronometro/>
      <Convertidor/>
    </div>
  );
}

export default Cuerpo;
