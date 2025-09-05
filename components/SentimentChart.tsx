
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SentimentDataPoint } from '../types';

interface SentimentChartProps {
  data: SentimentDataPoint[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-700/80 p-3 rounded-md border border-slate-600 shadow-lg backdrop-blur-sm">
        <p className="label text-sm text-slate-300">{`Time : ${label}`}</p>
        <p className="intro text-sm font-semibold text-blue-400">{`Sentiment : ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const SentimentChart: React.FC<SentimentChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" strokeOpacity={0.5} />
        <XAxis dataKey="time" tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={{ stroke: '#64748b' }} axisLine={{ stroke: '#64748b' }} />
        <YAxis domain={[-1, 1]} tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={{ stroke: '#64748b' }} axisLine={{ stroke: '#64748b' }} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SentimentChart;
