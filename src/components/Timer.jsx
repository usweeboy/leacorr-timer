import React, { useContext, useState, useEffect, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SettingsContext from '../SettingsContext';

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerMode, setTimerMode] = useState('work');

  const timeLeftRef = useRef(timeLeft);
  const isPausedRef = useRef(isPaused); 
  const timerModeRef = useRef(timerMode); 

  function tick() {
    timeLeftRef.current--;
    setTimeLeft(timeLeftRef.current);
  }

  useEffect(() => {

    function switchTimerMode() {
      const nextTimerMode = timerModeRef.current === 'work' ? 'break' : 'work';
      const nextTime = (nextTimerMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60; 
  
      setTimerMode(nextTimerMode);
      timerModeRef.current = nextTimerMode;
  
      setTimeLeft(nextTime);
      timeLeftRef.current = nextTime;
    }

    timeLeftRef.current = settingsInfo.workMinutes * 60;
    setTimeLeft(timeLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (timeLeftRef.current === 0) {
        return switchTimerMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalTime = timerMode === 'work' 
    ? settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(timeLeft / totalTime * 100);

  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;
  
  return (
    <div className='timer py-10'>
      <div className='flex justify-center'>
        <div className='max-w-[300px] max-h-[300px]'>
          <CircularProgressbar 
            value={percentage} 
            text={`${minutes}:${seconds}`}
            strokeWidth={5}
            styles={buildStyles({
              textColor: '#FFFFFE',
              textSize: '17px',
              pathColor: '#7F5AF0',
              trailColor: '#16161A'
            })}
          />
        </div>
      </div>
      <div className='py-8 flex justify-center'>
        <div>
          {isPaused 
            ? <div className='btn-effect cursor-pointer p-[10px] border border-gray-600 rounded-md'
                onClick={() => { setIsPaused(false); isPausedRef.current = false }}>
                <img src='icons/play.svg' className='w-8 h-8'/>
              </div>
            : <div className='btn-effect cursor-pointer p-[10px] border border-gray-600 rounded-md'
                onClick={() => { setIsPaused(true); isPausedRef.current = true }}>
                <img src='icons/pause.svg' className='w-8 h-8'/>
              </div>
          }
        </div>
        <div className='btn-effect cursor-pointer ml-4 p-[10px] border border-gray-600 rounded-md'
          onClick={() => settingsInfo.setShowSettings(true)}>
          <img src='icons/settings.svg' className='w-8 h-8'/>
        </div>
      </div>
    </div>
  )
}

export default Timer