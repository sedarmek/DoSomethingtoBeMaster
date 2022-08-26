import React from 'react';
// import PropTypes from 'prop-types';
import './Convertidor.css';

const Convertidor = () => (
  <div className="Convertidor">
    <p>Convertidor</p>
    <input type="number" className='convertidor_minutos' placeholder='minutos'/>
    <p className="convertidor_horas">Horas</p>
  </div>
);

Convertidor.propTypes = {};

Convertidor.defaultProps = {};

export default Convertidor;
