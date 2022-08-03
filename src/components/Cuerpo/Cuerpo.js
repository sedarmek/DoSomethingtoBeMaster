import React, { useState } from 'react';
import './Cuerpo.css';

import Canvas from '../Canvas/Canvas'
import Cronometro from '../Cronometro/Cronometro'
import Convertidor from '../Convertidor/Convertidor'
import GeneradorHabilidad from '../GeneradorHabilidad/GeneradorHabilidad';

function Cuerpo() {
  let [numeroHabilidades, setHabilidades] = useState(0)
  const updateHabilidades = (childDataCount)=>{
    setHabilidades(childDataCount)
  }
  return (
    <div className="Cuerpo">
      <Canvas NumeroHabilidadesToCanvas={numeroHabilidades}/>
      <GeneradorHabilidad className='GeneradorHabilidad' getCountHabilidadByChild = {updateHabilidades}/>
      <Cronometro/>
      <Convertidor/>
    </div>
  );
}

export default Cuerpo;
