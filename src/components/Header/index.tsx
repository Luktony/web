import React from 'react';
import { NewTaskForm } from '../NewTaskForm';
import { SummaryTask } from '../SummaryTask';
import Timer from '../Timer';
import BreakTimers from '../BreakTimers';

export function Header() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-1 p-4">
        <div className="flex flex-col items-center">         
          <Timer />
          <BreakTimers />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-center">
          <NewTaskForm />
          <SummaryTask />
        </div>
      </div>
    </div>
  );
}
