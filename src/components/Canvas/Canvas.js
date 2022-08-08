import React from 'react';
import './Canvas.css';
import GraficaHabilidades from '../GraficaHabilidades/GraficaHabilidades'

const Canvas = (info) => {
  return (
    <div className="Canvas">
      <GraficaHabilidades HorasHabilidades={info.HorasHabilidades}/>
    </div>
  )
}

export default Canvas;
