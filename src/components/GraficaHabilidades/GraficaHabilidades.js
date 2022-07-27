import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'],
  datasets: [
    {
      label: 'Hours',
      data: [40, 25, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};
const GraficaHabilidades = () => (
  <div className="RadarChart">
    <Radar data={data}></Radar>
  </div>
);

export default GraficaHabilidades;
