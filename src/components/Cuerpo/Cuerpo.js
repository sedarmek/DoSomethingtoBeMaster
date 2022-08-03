import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Cuerpo.css';
import Canvas from '../Canvas/Canvas'
// import Habilidad from '../Habilidad/Habilidad'
import Cronometro from '../Cronometro/Cronometro'
import Convertidor from '../Convertidor/Convertidor'
import GeneradorHabilidad from '../GeneradorHabilidad/GeneradorHabilidad';

function Cuerpo() {
  let [numeroHabilidades, setHabilidades] = useState('sin numero')
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


// Cuerpo.propTypes = {};

// Cuerpo.defaultProps = {};

export default Cuerpo;
