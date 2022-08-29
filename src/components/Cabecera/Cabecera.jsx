import React from 'react';
import './Cabecera.css';

import { NavLink } from 'react-router-dom';

const Cabecera = () => (
  <div className="Cabecera">
    <nav>
      <NavLink to="DoSomethingtoBeMaster" className="link">Home</NavLink>
      <NavLink to="about" className="link">About</NavLink>
    </nav>
  </div>
);

export default Cabecera;
