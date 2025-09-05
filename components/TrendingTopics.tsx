
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Topic } from '../types';

interface TrendingTopicsProps {
  data: Topic[];
}

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-700/80 p-3 rounded-md border border-slate-600 shadow-lg backdrop-blur-sm">
        <p className="label text-sm font-semibold text-slate-200">{`${payload[0].payload.name}`}</p>
        <p className="intro text-sm text-blue-400">{`Mentions : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ data }) => {
  const sortedData = [...data].sort((a,b) => a.mentions - b.mentions);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={sortedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis type="number" hide />
        <YAxis 
          dataKey="name" 
          type="category" 
          tick={{ fill: '#cbd5e1', fontSize: 14 }} 
          tickLine={false} 
          axisLine={false}
          width={120}
        />
        <Tooltip cursor={{ fill: 'rgba(71, 85, 105, 0.3)' }} content={<CustomTooltip />} />
        <Bar dataKey="mentions" barSize={20} radius={[0, 10, 10, 0]}>
          {sortedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TrendingTopics;
