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
  labels: ['H 1', 'H 2', 'H 3', 'H 4', 'H 5'],
  datasets: [
    {
      spanGaps: false,//para evitar la segmentacion de las lineas cuando son muchos points
      label: 'Hours',
      data: [50, 50, 50, 50, 50],
      fill: true,
      showLine: false,//renderizado de la lineas en los pointsH
      backgroundColor: 'rgba(99, 99, 255, 0.8)',
      borderColor: 'rgba(99, 99, 255, 1)',
      borderWidth: 0.3,
      pointStyle: 'circle',
      pointBackgroundColor: 'rgba(99, 99, 255, 0.1)',
      pointBorderColor: 'rgba(99, 99, 255, 0.1)',
      pointHoverBackgroundColor: 'rgba(99, 99, 255, 0.5)',
      pointHoverBorderColor: 'rgba(99, 99, 255, 0.5)',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 4,
      pointHoverRadius: 3,
      tension: -0.14
    },
  ],
};
const options = {
  animation: true,
  scales: {
      r: {
          angleLines: {
              display: true
          },
          // suggestedMin: 0,
          // suggestedMax: 50,
          min: 0,
          max: 50,
          ticks: {
            stepSize: 1
          }
      }
  },
  layout: {
    padding: 5
  },
  plugins: {
    tooltip: {
      enabled: true
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      maxHeight: 10,
      maxWidth: 250,
      fullSize: false,
      reverse: false,
      rtl: false,
      textDirection: 'rtl',
      labels: {
        boxHeight: 8,
        boxWidth: 10,
        color: 'red',
        padding: 0,
        usePointStyle: true,
        pointStyle: 'circle',
        pointStyleWidth: 10,
        textAlign: 'center'
      }
    }
  }
};
const GraficaHabilidades = () => (
  <div className="GraficaHabilidades">
    <Radar data={data} options={options}></Radar>
  </div>
);

export default GraficaHabilidades;
