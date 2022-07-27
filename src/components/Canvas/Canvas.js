import React from 'react';
// import PropTypes from 'prop-types';
import './Canvas.css';
import GraficaHabilidades from '../GraficaHabilidades/GraficaHabilidades'

const Canvas = () => {
  return (
    <div className="Canvas">
      Canvas Component
      <GraficaHabilidades></GraficaHabilidades>
    </div>
  )
}

Canvas.propTypes = {};

Canvas.defaultProps = {};

export default Canvas;
