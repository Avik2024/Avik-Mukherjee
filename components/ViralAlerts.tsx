
import React from 'react';
import { Alert } from '../types';
import { AlertTriangleIcon } from './IconComponents';

interface ViralAlertsProps {
  alerts: Alert[];
}

const ViralAlerts: React.FC<ViralAlertsProps> = ({ alerts }) => {
  return (
    <div className="h-full max-h-[460px] overflow-y-auto space-y-3">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-start gap-3 p-3 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-md">
          <div className="text-amber-500 mt-1">
            <AlertTriangleIcon />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-amber-400">Topic "{alert.topic}" is going viral</p>
            </div>
            <p className="text-slate-300 text-sm">{alert.message}</p>
            <p className="text-xs text-slate-500 mt-1">{alert.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViralAlerts;
