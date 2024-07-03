import React from 'react';

const BreakTimers: React.FC = () => {
  return (
    <div id="container-bklg" className="flex  p-2 m-2  bg-gray-800 rounded-lg">
      <div id="bk" className="text-center mr-5 p-">
        <h1 className="font-bold text-xl">5:00</h1>
        <p className="font-medium text-xl">Descanço Curto - 0</p>
      </div>
      <div id="lg" className="text-center">
        <h1 className="font-bold text-xl">25:00</h1>
        <p className="font-medium text-xl">Descanço Longo - 0</p>
      </div>
    </div>
  );
};

export default BreakTimers;
