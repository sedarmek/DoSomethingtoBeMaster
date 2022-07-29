import React from 'react';
// import PropTypes from 'prop-types';
import './Cuerpo.css';
import Canvas from '../Canvas/Canvas'
// import Habilidad from '../Habilidad/Habilidad'
import Cronometro from '../Cronometro/Cronometro'
import Convertidor from '../Convertidor/Convertidor'
import GeneradorHabilidad from '../GeneradorHabilidad/GeneradorHabilidad';

const Cuerpo = () => (
  <div className="Cuerpo">
    Cuerpo Component
    <Canvas/>
    <GeneradorHabilidad className='GeneradorHabilidad'/>
    <Cronometro/>
    <Convertidor/>
  </div>
);

// Cuerpo.propTypes = {};

// Cuerpo.defaultProps = {};

export default Cuerpo;
