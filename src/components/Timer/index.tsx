import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [segundos, setSegundos] = useState<number>(
    Number(localStorage.getItem('segundos')) || 1500
  ); // 25 minutos em segundos
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (isActive) {
      intervalId = setInterval(() => {
        if (segundos > 0) {
          setSegundos(segundos - 1);
        } else {
          clearInterval(intervalId);
          setIsActive(false);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    // Salvando o estado no localStorage quando ocorrer uma mudança
    localStorage.setItem('segundos', String(segundos));

    return () => clearInterval(intervalId);
  }, [isActive, segundos]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSegundos(1500); // Reinicia para 25 minutos
    localStorage.setItem('segundos', String(1500)); // Reseta o valor no localStorage
  };

  const formatTime = (segundos: number): string => {
    const minutos: number = Math.floor(segundos / 60);
    const segundosRestantes: number = segundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
  };

  return (
    <div id="timer-total" className="flex-col bg-gray-800 rounded-lg w-400 h-400">
      <div id="container-timer" className="p-2 m-2 text-center">
        <h3 className="text-4xl font-bold">Seção-0</h3>
        <h1 id="timer" className="text-8xl">{formatTime(segundos)}</h1>
        <button
          id="start"
          className="gap-2 bg-button px-4 rounded-lg m-2 p-2 max-w-20"
          onClick={startTimer}
        >
          Começar
        </button>
        <button
          id="pause"
          className={`gap-2 bg-button px-4 rounded-lg m-2 p-2 min-w-20 ${isActive ? '' : 'text-red-500'}`}
          onClick={pauseTimer}
        >
          Pausar
        </button>
        <button
          id="reset"
          className="gap-2 bg-button px-4 rounded-lg m-2 p-2 min-w-20"
          onClick={resetTimer}
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Timer;
