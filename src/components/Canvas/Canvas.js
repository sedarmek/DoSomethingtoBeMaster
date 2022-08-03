import React from 'react';
import './Canvas.css';
import GraficaHabilidades from '../GraficaHabilidades/GraficaHabilidades'

const Canvas = (info) => {
  return (
    <div className="Canvas">
      <GraficaHabilidades numeroHabilidadesToGraficHabilidades={info.NumeroHabilidadesToCanvas}></GraficaHabilidades>
    </div>
  )
}

export default Canvas;
