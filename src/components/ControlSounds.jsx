import React, { useState, useRef, useEffect } from 'react'

const ControlSounds = () => {
  const soundsRef = {
    radio: useRef(null),
    rain: useRef(null),
    forest: useRef(null),
  };

  const [isPlaying, setIsPlaying] = useState({
    radio: false,
    rain: false,
    forest: false,
  })

  useEffect(() => {
    if (isPlaying.radio) {
      soundsRef.radio.current.play();
    } else {
      soundsRef.radio.current.pause();
    }

    if (isPlaying.rain) {
      soundsRef.rain.current.play();
    } else {
      soundsRef.rain.current.pause();
    }

    if (isPlaying.forest) {
      soundsRef.forest.current.play();  
    } else {
      soundsRef.forest.current.pause();
    }
  });

  return (
    <div className='control_panel absolute bottom-0 w-full flex justify-center p-2'>
      <div className='w-full sm:w-1/2 py-3 rounded-md border btn-effect border-gray-500 flex justify-center items-center'>
        <div 
          style={ isPlaying.rain ? {borderColor: '#0ea5e9'} : {borderColor: '#4b5563'}}
          className='border btn-effect sound-btn cursor-pointer p-2 rounded-md border-gray-600'
          onClick={() => setIsPlaying({...isPlaying, rain: !isPlaying.rain})}>
          <img src='icons/rain.svg' className='sound-img w-7 h-7'/>
          <audio src='sounds/rainsound.mp3' ref={soundsRef.rain}/>
        </div>
        {!isPlaying.radio 
          ? <div className='btn-effect cursor-pointer mx-4 p-2 rounded-full border border-gray-500'
              onClick={() => setIsPlaying({...isPlaying, radio: true})}>
              <img src='icons/play.svg' className='w-6 h-6'/>
              <audio src='https://play.lofiradio.ru:8000/mp3_320' ref={soundsRef.radio}/>
            </div>
          : <div className='btn-effect cursor-pointer mx-4 p-2 rounded-full border border-gray-500'
              onClick={() => setIsPlaying({...isPlaying, radio: false})}>
              <img src='icons/pause.svg' className='w-6 h-6'/>
              <audio src='https://play.lofiradio.ru:8000/mp3_320' ref={soundsRef.radio}/>
            </div>
        }
        <div 
          style={ isPlaying.forest ? {borderColor: '#22c55e'} : {borderColor: '#4b5563'}}
          className='border p-2 btn-effect sound-btn cursor-pointer rounded-md border-gray-600'
          onClick={() => setIsPlaying({...isPlaying, forest: !isPlaying.forest})}>
          <img src='icons/forest.svg' className='sound-img w-7 h-7'/>
          <audio src='sounds/forestsound.mp3' ref={soundsRef.forest}/>
        </div>
      </div>
    </div>
  )
}

export default ControlSounds