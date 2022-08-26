import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cuerpo from '../src/components/Cuerpo/Cuerpo';
import Cronometro from '../src/components/Cronometro/Cronometro';
import Convertidor from '../src/components/Convertidor/Convertidor';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="cuerpo" element={<Cuerpo />} />
      <Route path="cronometro" element={<Cronometro />} />
      <Route path="convertidor" element={<Convertidor />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
