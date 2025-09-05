
import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  live?: boolean;
}

const Card: React.FC<CardProps> = ({ title, icon, children, live = false }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          {icon}
          <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
        </div>
        {live && (
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400">Live</span>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Card;
