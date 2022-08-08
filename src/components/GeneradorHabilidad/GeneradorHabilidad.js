import React from 'react';
import './GeneradorHabilidad.css';
import Habilidad from '../Habilidad/Habilidad'

function GeneradorHabilidad(info) {
  
  function incrementHabilidades(){
    info.IncrementarHabilidades();
  }
  function decrementHabilidades(){
    if(info.HorasHabilidades.length > 1) {
      info.DecrementarHabilidades();
    }
  }
  
  function printHabilidades(horas){
    let habilidades = horas;
    return (
          <div>
            {
            habilidades.map((value, index) => {
              return <Habilidad key={index} keyToChild={index} HorasHabilidades={info.HorasHabilidades} GetHourOfChildToParent={getHourOfChildToParent}></Habilidad>
              })
            }
          </div>
    )
  }
  /* ***se crea un array que guardara todas las horas de las habilidades */
  /* ***se crea una funcion que recibira las horas del componente hijo cada que se cambie la hora*/
  function getHourOfChildToParent(hourChild, indexChild) {
    info.ActualizarHorasDeHabilidad(hourChild, indexChild);
  }
  // useEffect(()=>{
  //   // sendHoursHabilidades(horasHabilidades);/* bucle: renderiza el cuerpo qu llamada otra vez a este. */
  // })

  return (
  <div className="GeneradorHabilidad" id='prueba'>
    {printHabilidades(info.HorasHabilidades)}
    <button className="GeneradorHabilidad_button" onClick={decrementHabilidades}>-</button>
    <button className="GeneradorHabilidad_button" onClick={incrementHabilidades}>+</button>
  </div>
  );
}

export default GeneradorHabilidad;
