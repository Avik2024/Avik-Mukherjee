
import React from 'react';
import { useMockDataStream } from '../hooks/useMockDataStream';
import SentimentChart from './SentimentChart';
import TrendingTopics from './TrendingTopics';
import LiveFeed from './LiveFeed';
import ViralAlerts from './ViralAlerts';
import Card from './Card';
import { ClockIcon, MessageCircleIcon, TrendingUpIcon, AlertTriangleIcon } from './IconComponents';

const Dashboard: React.FC = () => {
  const data = useMockDataStream();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Chart - takes 2/3 width on large screens */}
      <div className="lg:col-span-2">
        <Card title="Overall Sentiment Trend" icon={<TrendingUpIcon />}>
          <div className="h-80">
            <SentimentChart data={data.sentiment} />
          </div>
        </Card>
      </div>

      {/* Live Feed - takes 1/3 width on large screens */}
      <div className="lg:col-span-1">
        <Card title="Live Feed" icon={<MessageCircleIcon />} live>
           <LiveFeed posts={data.posts} />
        </Card>
      </div>
      
      {/* Trending Topics - takes 2/3 width */}
      <div className="lg:col-span-2">
        <Card title="Trending Topics" icon={<ClockIcon />}>
           <div className="h-80">
            <TrendingTopics data={data.topics} />
          </div>
        </Card>
      </div>

      {/* Viral Alerts - takes 1/3 width */}
       <div className="lg:col-span-1">
        <Card title="Viral Alerts" icon={<AlertTriangleIcon />}>
          <ViralAlerts alerts={data.alerts} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
