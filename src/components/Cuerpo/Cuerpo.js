import React from 'react';
// import PropTypes from 'prop-types';
import './Cuerpo.css';
import Canvas from '../Canvas/Canvas'
import Habilidad from '../Habilidad/Habilidad'
import Cronometro from '../Cronometro/Cronometro'
import Convertidor from '../Convertidor/Convertidor'

const Cuerpo = () => (
  <div className="Cuerpo">
    Cuerpo Component
    <Canvas></Canvas>
    <Habilidad></Habilidad>
    <Habilidad></Habilidad>
    <Habilidad></Habilidad>
    <Cronometro></Cronometro>
    <Convertidor></Convertidor>
  </div>
);

// Cuerpo.propTypes = {};

// Cuerpo.defaultProps = {};

export default Cuerpo;
