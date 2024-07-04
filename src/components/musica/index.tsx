import React from 'react';

const AudioPlayer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-center items-center">
      <div className="flex items-center">
        <span className="mr-2">Lofi Music</span>
        <audio controls className="outline-none">
          <source src="/relax.mp3" type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudioo.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
