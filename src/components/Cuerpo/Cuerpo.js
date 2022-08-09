import React, { useState, useEffect } from 'react';
import './Cuerpo.css';

import Canvas from '../Canvas/Canvas'
import Cronometro from '../Cronometro/Cronometro'
import Convertidor from '../Convertidor/Convertidor'
import GeneradorHabilidad from '../GeneradorHabilidad/GeneradorHabilidad';

function Cuerpo() {
  const defaultNumberHabilities = 3;
  const defaultHour = 50;
  let localStorageHour = localStorage.getItem('localHours') && 'vacio';
  let [horasHabilidades, setHorasHabilidades] = useState(Array(defaultNumberHabilities).fill(defaultHour))


  function incrementarHabilidades(){
    setHorasHabilidades([...horasHabilidades, defaultHour])
  }
  function decrementarHabilidades(){
    setHorasHabilidades(horasHabilidades.slice(0, horasHabilidades.length-1))
  }

  function actualizarHoraDeHabilidad(hourChild, indexChild) {
    setHorasHabilidades(()=>{
      horasHabilidades = [...horasHabilidades]
      horasHabilidades.splice(indexChild, 1, parseInt(hourChild))
      return horasHabilidades
    })
  }
  // funcion para guardar el array en el cache
  function saveInLocalStorage(horas) {
      localStorageHour = horas
      // localStorage.setItem('')
      console.log({localStorageHour})
  }
  useEffect(()=>{saveInLocalStorage(horasHabilidades)})
  return (
    <div className="Cuerpo">
      <Canvas HorasHabilidades={horasHabilidades}/>
      <GeneradorHabilidad className='GeneradorHabilidad' HorasHabilidades={horasHabilidades} IncrementarHabilidades={incrementarHabilidades} DecrementarHabilidades={decrementarHabilidades} ActualizarHorasDeHabilidad={actualizarHoraDeHabilidad}/>
      <Cronometro/>
      <Convertidor/>
    </div>
  );
}

export default Cuerpo;
