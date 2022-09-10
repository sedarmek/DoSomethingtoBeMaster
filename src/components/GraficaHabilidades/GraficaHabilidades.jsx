import React, { useContext } from 'react';
import { HabilitiesContext } from '../containers/HomeBody/HomeBody'
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

function GraficaHabilidades() {
  const habilitiesContext = useContext(HabilitiesContext);
  const numberHabilidades = habilitiesContext.length
  const horaLimite = 1000;
  const nombresHabilidad = [...Array(numberHabilidades)].map((val, index) => 'H'+(index+1));
  const horasLimiteHabilidad = Array(numberHabilidades).fill(horaLimite);
  const horasHabilidad = habilitiesContext.map((value)=>value.hours);
  const data = {
    labels: nombresHabilidad,
    datasets: [
      {
        spanGaps: false,
        label: 'Objective',
        data: horasLimiteHabilidad,
        fill: true,
        showLine: false,
        backgroundColor: 'rgba(50, 90, 150, 0.4)',
        borderColor: 'rgba(99, 99, 255, 1)',
        borderWidth: 0.3,
        pointStyle: 'circle',
        pointBackgroundColor: 'rgba(99, 255, 255, 0.1)',
        pointBorderColor: 'rgba(99, 99, 255, 0.1)',
        pointHoverBackgroundColor: 'rgba(99, 99, 255, 0.5)',
        pointHoverBorderColor: 'rgba(99, 99, 255, 0.5)',
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        tension: -0.14
      },
      {
        spanGaps: false,//para evitar la segmentacion de las lineas cuando son muchos points
        label: 'Hours',
        data: horasHabilidad,
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
        pointBorderWidth: 0,
        pointRadius: 1,
        pointHitRadius: 3,
        pointHoverRadius: 2,
        tension: -0.14
      }
    ]
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
            max: horaLimite,
            ticks: {
              stepSize: horaLimite
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
        reverse: true,
        rtl: false,
        textDirection: 'rtl',
        labels: {
          boxHeight: 8,
          boxWidth: 10,
          color: 'rgba(99, 99, 99, 0.5)',
          padding: 0,
          usePointStyle: true,
          pointStyle: 'circle',
          pointStyleWidth: 10,
          textAlign: 'center'
        }
      }
    }
  };
  return(
    <div className="GraficaHabilidades">
      <Radar data={data} options={options}></Radar>
    </div>
  );
}

export default GraficaHabilidades;
