// src/components/TimerModal.jsx
import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const TimerModal = ({ isOpen, onClose }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(new Date(0, 0, 0, 0, 0, 0));

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const newTime = new Date(0, 0, 0, 0, 0, secondsElapsed);
    setStartTime(newTime);
  }, [secondsElapsed]);

  const formatTime = () => {
    const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const seconds = String(secondsElapsed % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSecondsElapsed(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[300px] text-center">
        <h2 className="text-xl font-bold mb-4">Analog Stopwatch</h2>

        <div className="flex justify-center mb-4">
          <Clock value={startTime} size={180} />
        </div>

        <p className="text-lg mb-4">Time: <strong>{formatTime()}</strong></p>

        <div className="flex justify-center gap-3 mb-4">
          <button onClick={handleStart} className="bg-green-500 px-4 py-2 text-white rounded">Start</button>
          <button onClick={handleStop} className="bg-red-500 px-4 py-2 text-white rounded">Stop</button>
        </div>

        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TimerModal;
