import React from 'react';
// import PropTypes from 'prop-types';
import './Cronometro.css';

const Cronometro = () => (
  <div className="Cronometro">
    <p className ="p_tiempo">00:00</p>
    <button className="cronometro_button">iniciar</button>
    <button className="cronometro_button">pausar</button>
  </div>
);

Cronometro.propTypes = {};

Cronometro.defaultProps = {};

export default Cronometro;
