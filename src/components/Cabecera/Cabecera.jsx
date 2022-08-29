import React from 'react';
import './Cabecera.css';

import { NavLink } from 'react-router-dom';

const Cabecera = () => (
  <div className="Cabecera">
    <nav>
      <NavLink to="DoSomethingtoBeMaster" className="link">Home</NavLink>
      <NavLink to="error" className="link">Not found</NavLink>
    </nav>
  </div>
);

export default Cabecera;
