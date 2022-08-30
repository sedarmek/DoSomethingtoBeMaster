import React, { useState,  useEffect } from 'react';
import { FaRegPlayCircle, FaRegStopCircle, FaRegPauseCircle } from 'react-icons/fa'
import './Cronometro.css';

const Cronometro = () => {
  let [shoudCount, setShoudCount] = useState(false);
  let [timeData, setTimeDate] = useState({minutes: 0,seconds: 0})

  function toggleShoudCount(){
    if(!shoudCount){
      setShoudCount(true);
    }else{
      setShoudCount(false);
    }
  }
  function stopTimer(){
    setTimeDate(timeData = {minutes: 0,seconds: 0});
    setShoudCount(false);
  }
  function renderIconToggleStartOrPause(dependency){
    if(!dependency){return <FaRegPlayCircle className='cronometro_icon'/>}
    else{return <FaRegPauseCircle className='cronometro_icon'/>}
  }
  useEffect(()=>{
    if(shoudCount){
      const intervalID = setInterval(()=>{
        setTimeDate(()=>{
          let currentTime = {...timeData};
          if(currentTime.seconds < 59){
            currentTime.seconds++;
          }else if(currentTime.seconds >=59){
            currentTime.seconds = 0;
            currentTime.minutes++;
          }
          return currentTime;
        });
      },1000)
      return ()=>clearInterval(intervalID);//con la arrow function si funciona
    }
  },[shoudCount, timeData]);

  function convertSingleDigitsToDouble(number){
    if(number < 10){
      return `0${number}`;
    }else{return `${number}`}
  }
  function printTimer(data){
    return convertSingleDigitsToDouble(data.minutes)+':'+convertSingleDigitsToDouble(data.seconds);
  }

  return (
    <div className="Cronometro">
      <p className ="p_tiempo">{printTimer(timeData)}</p>
      <button className="cronometro_button" onClick={toggleShoudCount}>{renderIconToggleStartOrPause(shoudCount)}</button>
      <button className="cronometro_button" onClick={stopTimer}><FaRegStopCircle className='cronometro_icon'/></button>
    </div>
);}

export default Cronometro;
