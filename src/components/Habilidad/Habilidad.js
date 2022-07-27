import React from 'react';
import './Habilidad.css';
import { FaPenSquare, FaRegSave } from "react-icons/fa";

const Habilidad = () => (
  <div className="Habilidad">
    <FaPenSquare className='icono_pen'></FaPenSquare>
    <input type="text" className="input_nombreHabilidad" placeholder='Escribe la habilidad'></input>
    <input type="number" className="input_horasHabilidad" placeholder='horas'></input>
    <p>/1000 horas</p>
    <FaRegSave className="icono_save"></FaRegSave>
  </div>
);

Habilidad.propTypes = {};

Habilidad.defaultProps = {};

export default Habilidad;
