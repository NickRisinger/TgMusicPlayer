import './App.css';

import WebApp from '@twa-dev/sdk';

import qala from './music.mp3';
import { useEffect, useRef } from 'react';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => audioRef.current!.play();
  const pause = () => audioRef.current!.pause();
  const setVolume = (value: number) => (audioRef.current!.volume = value);

  useEffect(() => {
    return () => {
      pause();
    };
  }, []);

  return (
    <>
      <div>
        <audio ref={audioRef} src={qala}></audio>
        <div>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="card">
        <button
          onClick={() => WebApp.showAlert(`Hello World! Current count is`)}
        >
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
